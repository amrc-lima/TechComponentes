'use client';

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from 'react';
import { products, type Product } from '@/data/products';
import toast from 'react-hot-toast';

export interface CartItem extends Product { quantity: number }
export interface Order { id: string; date: string; items: CartItem[]; total: number; message?: string }
interface CartContextType {
  cart: CartItem[];
  orders: Order[];
  isHydrated: boolean;
  addToCart: (product: Product) => void;
  addItemsToCart: (items: { productId: string; quantity: number }[]) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  addOrder: (order: Order) => void;
  cartTotal: number;
  cartCount: number;
}

const CART_KEY = 'tech-cart';
const ORDERS_KEY = 'tech-orders';
const CHANGE_EVENT = 'techcomponentes-storage';
const memory: Record<string, string | null> = {};
const failedKeys = new Set<string>();
const CartContext = createContext<CartContextType | undefined>(undefined);

function read(key: string) {
  if (failedKeys.has(key)) return memory[key] ?? null;
  try {
    const value = window.localStorage.getItem(key);
    memory[key] = value;
    return value;
  } catch {
    return memory[key] ?? null;
  }
}

function write(key: string, value: unknown) {
  const serialized = JSON.stringify(value);
  memory[key] = serialized;
  try {
    window.localStorage.setItem(key, serialized);
    failedKeys.delete(key);
  } catch {
    failedKeys.add(key);
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}
function getSnapshot() { return JSON.stringify([read(CART_KEY), read(ORDERS_KEY)]); }
function getServerSnapshot() { return null; }
function parseArray(value: string | null): unknown[] {
  try {
    const parsed: unknown = JSON.parse(value ?? '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

function normalizeItems(items: unknown[], historical = false): CartItem[] {
  const normalized = new Map<string, CartItem>();
  for (const value of items) {
    if (!value || typeof value !== 'object') continue;
    const item = value as Partial<CartItem>;
    const product = products.find((entry) => entry.id === item.id);
    const quantity = item.quantity;
    if (!product || typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 1) continue;
    const price = historical && typeof item.precoNumerico === 'number' && Number.isFinite(item.precoNumerico) && item.precoNumerico >= 0
      ? item.precoNumerico : product.precoNumerico;
    normalized.set(product.id, {
      ...product,
      precoNumerico: price,
      quantity: Math.min((normalized.get(product.id)?.quantity ?? 0) + quantity, 999),
    });
  }
  return [...normalized.values()];
}

function decode(snapshot: string | null) {
  const [cartRaw, ordersRaw]: [string | null, string | null] = snapshot ? JSON.parse(snapshot) : [null, null];
  const cart = normalizeItems(parseArray(cartRaw));
  const orders = parseArray(ordersRaw).flatMap((value): Order[] => {
    if (!value || typeof value !== 'object') return [];
    const order = value as Partial<Order>;
    if (typeof order.id !== 'string' || typeof order.date !== 'string' || !Array.isArray(order.items)) return [];
    const items = normalizeItems(order.items, true);
    if (!items.length) return [];
    return [{
      id: order.id, date: order.date, items,
      total: items.reduce((sum, item) => sum + item.precoNumerico * item.quantity, 0),
      ...(typeof order.message === 'string' ? { message: order.message } : {}),
    }];
  });
  return { cart, orders };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { cart, orders } = useMemo(() => decode(snapshot), [snapshot]);
  function updateCart(update: (previous: CartItem[]) => CartItem[]) {
    write(CART_KEY, update(decode(getSnapshot()).cart));
  }
  function addItemsToCart(items: { productId: string; quantity: number }[]) {
    const additions = normalizeItems(items.map((item) => ({ id: item.productId, quantity: item.quantity })));
    if (!additions.length) return;
    updateCart((previous) => normalizeItems([...previous, ...additions]));
    toast.success(additions.length === 1 ? 'Componente adicionado ao carrinho.' : 'Lista de componentes adicionada ao carrinho.');
  }
  function setQuantity(productId: string, quantity: number) {
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 999) return;
    updateCart((previous) => previous.map((item) => item.id === productId ? { ...item, quantity } : item));
  }
  function addOrder(order: Order) {
    write(ORDERS_KEY, [order, ...decode(getSnapshot()).orders.filter((entry) => entry.id !== order.id)]);
  }
  return (
    <CartContext.Provider value={{
      cart, orders, isHydrated: snapshot !== null,
      addToCart: (product) => addItemsToCart([{ productId: product.id, quantity: 1 }]),
      addItemsToCart, setQuantity, addOrder,
      removeFromCart: (id) => updateCart((previous) => previous.filter((item) => item.id !== id)),
      clearCart: () => write(CART_KEY, []),
      cartTotal: cart.reduce((sum, item) => sum + item.precoNumerico * item.quantity, 0),
      cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    }}>{children}</CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
