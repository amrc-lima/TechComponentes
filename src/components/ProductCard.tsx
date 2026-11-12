'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaCartPlus, FaMicrochip } from 'react-icons/fa';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/contact';
import { asset } from '@/lib/assets';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, isHydrated } = useCart();
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-blue-200 hover:shadow-lg">
      <Link href={`/produto/${product.id}`} className="relative flex h-48 items-center justify-center border-b border-slate-100 bg-white p-6">
        {product.imageNote ? (
          <div className="px-5 text-center text-slate-400"><FaMicrochip className="mx-auto mb-3 text-4xl" aria-hidden="true" /><span className="text-xs">{product.imageNote}</span></div>
        ) : <Image src={asset(product.img)} alt={product.nome} fill className="object-contain p-6" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-700">{product.tag}</p>
        <Link href={`/produto/${product.id}`} className="font-bold leading-snug text-slate-900 hover:text-blue-700"><h3>{product.nome}</h3></Link>
        <p className="mt-2 text-xs text-slate-500">Ref. {product.id}</p>
        <p className="mb-4 mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{product.desc}</p>
        <dl className="mb-5 grid grid-cols-2 gap-2 text-xs">
          {product.specs.slice(0, 2).map((spec) => <div key={spec.label} className="rounded-lg bg-slate-50 p-2"><dt className="text-slate-500">{spec.label}</dt><dd className="mt-1 font-semibold text-slate-800">{spec.value}</dd></div>)}
        </dl>
        <div className="mt-auto border-t border-slate-100 pt-4">
          <p className="mb-3 text-xs text-slate-500">{product.availability}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl font-extrabold text-blue-950">{formatCurrency(product.precoNumerico)}</span>
            <button type="button" disabled={!isHydrated} onClick={() => addToCart(product)} aria-label={`Adicionar ${product.nome} ao carrinho`} className="rounded-xl bg-blue-50 p-3 text-blue-700 transition hover:bg-blue-100 disabled:opacity-50"><FaCartPlus className="text-xl" aria-hidden="true" /></button>
          </div>
          <Link href={`/produto/${product.id}`} className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline">Ver detalhes técnicos</Link>
        </div>
      </div>
    </article>
  );
}
