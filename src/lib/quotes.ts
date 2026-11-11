import type { CartItem, Order } from '@/context/CartContext';
import { formatCurrency } from './contact';

export function buildQuoteMessage(items: CartItem[], reference: string) {
  const total = items.reduce((sum, item) => sum + item.precoNumerico * item.quantity, 0);
  return [
    'Olá! Gostaria de solicitar um orçamento à TechComponentes.',
    `Referência: ${reference}`, '',
    ...items.map((item) => `• ${item.nome} (${item.id}) — ${item.quantity} un. × ${formatCurrency(item.precoNumerico)} = ${formatCurrency(item.precoNumerico * item.quantity)}`),
    '', `Subtotal de referência: ${formatCurrency(total)}`,
    'Gostaria de confirmar disponibilidade, compatibilidade, prazo, frete e condições de pagamento.',
  ].join('\n');
}
export function getOrderMessage(order: Order) {
  return order.message ?? buildQuoteMessage(order.items, order.id);
}
