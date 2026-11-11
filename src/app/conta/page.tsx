'use client';

import Link from 'next/link';
import { FaClipboardList } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import ContactActions from '@/components/ContactActions';
import { formatCurrency } from '@/lib/contact';
import { getOrderMessage } from '@/lib/quotes';

export default function HistoryPage() {
  const { orders, isHydrated } = useCart();
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">Seus projetos</p>
      <h1 className="mb-4 text-3xl font-extrabold text-slate-900">Histórico neste dispositivo</h1>
      <p className="mb-8 max-w-3xl leading-relaxed text-slate-600">Aqui ficam os resumos preparados a partir do carrinho neste navegador. Você pode consultá-los e compartilhar novamente. Eles não representam compras confirmadas e não são sincronizados entre dispositivos.</p>
      {!isHydrated ? <p role="status">Carregando histórico…</p> : !orders.length ? (
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-14 text-center">
          <FaClipboardList className="mx-auto mb-4 text-5xl text-blue-200" aria-hidden="true" />
          <h2 className="mb-3 text-xl font-bold text-slate-800">Nenhum orçamento preparado por aqui</h2>
          <p className="mb-6 text-slate-600">Selecione componentes e prepare o primeiro resumo no carrinho.</p>
          <Link href="/produtos" className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">Explorar catálogo</Link>
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map((order) => (
            <article key={order.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 bg-slate-50 p-5">
                <div><h2 className="font-bold text-slate-900">Resumo {order.id}</h2><p className="mt-1 text-sm text-slate-500">Preparado em {order.date}</p></div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">Registro local</span>
              </div>
              <div className="p-5">
                <ul className="mb-5 space-y-3">
                  {order.items.map((item) => <li key={item.id} className="flex flex-wrap justify-between gap-2 text-sm"><Link href={`/produto/${item.id}`} className="text-slate-700 hover:text-blue-700">{item.quantity} × {item.nome}</Link><span className="font-semibold">{formatCurrency(item.precoNumerico * item.quantity)}</span></li>)}
                </ul>
                <p className="mb-5 border-t border-slate-100 pt-4 font-bold text-blue-950">Subtotal de referência: {formatCurrency(order.total)}</p>
                <details>
                  <summary className="cursor-pointer font-semibold text-blue-700">Ver e compartilhar resumo</summary>
                  <pre className="my-4 whitespace-pre-wrap break-words rounded-xl bg-slate-50 p-4 font-sans text-sm leading-relaxed text-slate-700">{getOrderMessage(order)}</pre>
                  <ContactActions message={getOrderMessage(order)} />
                </details>
              </div>
            </article>
          ))}
        </div>
      )}
      <p className="mt-8 text-sm text-slate-500">Limpar os dados de navegação deste site remove o histórico salvo neste dispositivo.</p>
    </div>
  );
}
