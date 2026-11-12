'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaClipboardList, FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useCart, type Order } from '@/context/CartContext';
import ContactActions from '@/components/ContactActions';
import { formatCurrency } from '@/lib/contact';
import { buildQuoteMessage } from '@/lib/quotes';
import { asset } from '@/lib/assets';

export default function CartPage() {
  const { cart, cartTotal, cartCount, isHydrated, removeFromCart, clearCart, setQuantity, addOrder } = useCart();
  const [prepared, setPrepared] = useState<Order | null>(null);
  const matchesPrepared = prepared !== null && JSON.stringify(prepared.items) === JSON.stringify(cart);
  function prepareQuote() {
    const id = `TC-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const quote = { id, date: new Date().toLocaleDateString('pt-BR'), items: cart.map((item) => ({ ...item })), total: cartTotal, message: buildQuoteMessage(cart, id) };
    addOrder(quote);
    setPrepared(quote);
  }
  if (!isHydrated) return <div className="mx-auto max-w-7xl px-4 py-20" role="status">Carregando seu carrinho…</div>;
  if (!cart.length) return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <FaClipboardList className="mx-auto mb-5 text-5xl text-blue-200" aria-hidden="true" />
      <h1 className="mb-4 text-3xl font-extrabold text-slate-900">Seu carrinho está vazio</h1>
      <p className="mb-8 text-slate-600">Escolha os componentes do seu projeto para preparar um orçamento.</p>
      <Link href="/produtos" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-slate-950 hover:bg-blue-500"><FaArrowLeft aria-hidden="true" /> Explorar catálogo</Link>
    </div>
  );
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">Do catálogo ao seu projeto</p>
      <h1 className="mb-3 text-3xl font-extrabold text-slate-900">Carrinho de componentes</h1>
      <p className="mb-10 max-w-3xl text-slate-600">Confira as quantidades e prepare um resumo para solicitar orçamento. Disponibilidade, entrega e pagamento serão combinados no atendimento.</p>
      <div className="grid items-start gap-8 lg:grid-cols-3">
        <section aria-label="Componentes selecionados" className="space-y-4 lg:col-span-2">
          {cart.map((item) => (
            <article key={item.id} className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center">
              <Image src={asset(item.img)} alt={item.nome} width={88} height={88} className="h-22 w-22 shrink-0 rounded-xl object-contain" />
              <div className="min-w-0 flex-1">
                <Link href={`/produto/${item.id}`} className="font-bold text-slate-900 hover:text-blue-700">{item.nome}</Link>
                <p className="mt-1 text-sm text-slate-500">{item.id} · {formatCurrency(item.precoNumerico)} / unidade</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-sm text-slate-600">Quantidade</span>
                  <div className="flex items-center rounded-lg border border-slate-200">
                    <button type="button" aria-label={`Diminuir quantidade de ${item.nome}`} disabled={item.quantity <= 1} onClick={() => setQuantity(item.id, item.quantity - 1)} className="p-3 text-blue-700 disabled:opacity-30"><FaMinus aria-hidden="true" /></button>
                    <span className="min-w-8 text-center font-bold" aria-live="polite">{item.quantity}</span>
                    <button type="button" aria-label={`Aumentar quantidade de ${item.nome}`} disabled={item.quantity >= 999} onClick={() => setQuantity(item.id, item.quantity + 1)} className="p-3 text-blue-700 disabled:opacity-30"><FaPlus aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <span className="font-bold text-blue-950">{formatCurrency(item.precoNumerico * item.quantity)}</span>
                <button type="button" aria-label={`Remover ${item.nome}`} onClick={() => removeFromCart(item.id)} className="rounded-lg p-3 text-slate-500 hover:bg-red-50 hover:text-red-700"><FaTrash aria-hidden="true" /></button>
              </div>
            </article>
          ))}
          <div className="flex flex-wrap justify-between gap-4 py-4">
            <Link href="/produtos" className="font-bold text-blue-700 hover:underline">Continuar no catálogo</Link>
            <button type="button" onClick={clearCart} className="text-sm font-semibold text-slate-600 hover:text-red-700">Limpar carrinho</button>
          </div>
        </section>
        <aside className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Resumo para orçamento</h2>
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between gap-3"><dt>Componentes ({cartCount} unidades)</dt><dd className="font-semibold">{formatCurrency(cartTotal)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Frete e disponibilidade</dt><dd>A confirmar</dd></div>
            <div className="flex justify-between gap-3 border-t border-slate-100 pt-4 text-lg font-bold text-blue-950"><dt>Subtotal</dt><dd>{formatCurrency(cartTotal)}</dd></div>
          </dl>
          <button type="button" onClick={prepareQuote} disabled={matchesPrepared} className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-4 font-bold text-slate-950 hover:bg-blue-500 disabled:bg-blue-100 disabled:text-blue-800">{matchesPrepared ? 'Orçamento preparado' : 'Preparar orçamento'}</button>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">O resumo fica salvo neste navegador. Os itens permanecem no carrinho enquanto você decide como encaminhá-lo.</p>
          <Link href="/conta" className="mt-4 inline-block text-sm font-bold text-blue-700 hover:underline">Ver histórico neste dispositivo</Link>
        </aside>
      </div>
      {prepared && (
        <section className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8" aria-labelledby="prepared-heading">
          <h2 id="prepared-heading" className="mb-2 text-xl font-bold text-blue-950">Resumo preparado · {prepared.id}</h2>
          <p className="mb-5 text-sm text-slate-600">Escolha para quem encaminhar. Preparar ou copiar o resumo não confirma uma compra.</p>
          {!matchesPrepared && <p className="mb-4 font-semibold text-amber-800" role="status">O carrinho mudou. Prepare um novo orçamento para incluir as alterações.</p>}
          <pre className="mb-6 whitespace-pre-wrap break-words rounded-xl bg-white p-5 font-sans text-sm leading-relaxed text-slate-700">{prepared.message}</pre>
          <ContactActions key={prepared.id} message={prepared.message!} />
        </section>
      )}
    </div>
  );
}
