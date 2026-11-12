'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaCartPlus, FaFileAlt, FaMicrochip } from 'react-icons/fa';
import { products, productApplications, productAudiences, productCategories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ContactLink from '@/components/ContactLink';
import { formatCurrency } from '@/lib/contact';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart, isHydrated } = useCart();
  const product = products.find((item) => item.id === id);
  if (!product) return <div className="mx-auto max-w-3xl px-4 py-20 text-center"><h1 className="mb-4 text-3xl font-bold text-slate-900">Produto não encontrado</h1><p className="mb-7 text-slate-600">Não encontramos essa referência no catálogo atual.</p><Link href="/produtos" className="inline-flex items-center gap-2 font-bold text-blue-700"><FaArrowLeft aria-hidden="true" /> Voltar ao catálogo</Link></div>;
  const applications = product.applications.map((value) => productApplications.find((item) => item.value === value)?.label).filter(Boolean);
  const audiences = product.audiences.map((value) => productAudiences.find((item) => item.value === value)?.label).filter(Boolean);
  const categoryLabel = productCategories.find((item) => item.value === product.category)?.label ?? product.tag;
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav aria-label="Caminho da página" className="mb-8 flex flex-wrap gap-2 text-sm text-slate-500"><Link href="/" className="hover:text-blue-700">Início</Link><span aria-hidden="true">/</span><Link href="/produtos" className="hover:text-blue-700">Catálogo</Link><span aria-hidden="true">/</span><span className="text-slate-800">{product.nome}</span></nav>
      <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-2">
        <div className="flex flex-col p-6 sm:p-10">
          <div className="relative flex min-h-80 flex-1 items-center justify-center">
            {product.imageNote ? <div className="p-10 text-center text-slate-400"><FaMicrochip className="mx-auto mb-5 text-6xl" aria-hidden="true" /><p>{product.imageNote}</p></div> : <Image src={product.img} alt={product.nome} fill className="object-contain p-4" sizes="(max-width: 1024px) 100vw, 50vw" priority />}
          </div>
          <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-sm leading-relaxed text-blue-900"><h2 className="mb-2 font-bold">Confira antes de montar</h2><p>{product.compatibility}</p></div>
        </div>
        <div className="border-t border-slate-100 bg-slate-50 p-6 sm:p-10 lg:border-l lg:border-t-0">
          <Link href={`/produtos?categoria=${product.category}`} className="text-xs font-bold uppercase tracking-widest text-blue-600">{categoryLabel}</Link>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">{product.nome}</h1>
          <p className="mt-3 text-sm text-slate-500">Referência do catálogo: {product.id}</p>
          <p className="mt-6 text-3xl font-extrabold text-blue-950">{formatCurrency(product.precoNumerico)}</p>
          <p className="mt-2 text-sm font-semibold text-slate-600">{product.availability}</p>
          <p className="mt-6 leading-relaxed text-slate-600">{product.desc}</p>
          <dl className="my-7 space-y-4 text-sm"><div><dt className="font-bold text-slate-900">Aplicações</dt><dd className="mt-1 text-slate-600">{applications.join(' · ')}</dd></div><div><dt className="font-bold text-slate-900">Para quem</dt><dd className="mt-1 text-slate-600">{audiences.join(' · ')}</dd></div></dl>
          {product.certification && <div className="mb-6 rounded-xl border border-blue-200 bg-white p-4 text-sm"><p className="font-bold text-slate-900">{product.certification.label}</p><p className="mt-1 text-slate-600">Referência: {product.certification.reference}</p>{product.certification.url && <a href={product.certification.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-blue-700 hover:underline">Consultar documentação</a>}</div>}
          <button type="button" disabled={!isHydrated} onClick={() => addToCart(product)} className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700 disabled:opacity-50"><FaCartPlus aria-hidden="true" /> Adicionar ao carrinho</button>
          <ContactLink message={`Gostaria de orientação sobre ${product.nome} (referência ${product.id}) e sua compatibilidade com meu projeto.`} className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-4 text-center font-bold text-blue-700 hover:bg-blue-50">Pedir orientação sobre esta peça</ContactLink>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">Use o carrinho para preparar um orçamento. Disponibilidade, frete, prazo e condições serão confirmados no atendimento.</p>
        </div>
      </div>
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="specs-heading">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4"><h2 id="specs-heading" className="text-2xl font-bold text-slate-900">Especificações técnicas</h2>{product.datasheetUrl && product.datasheetUrl !== '#' && <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-4 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50"><FaFileAlt aria-hidden="true" /> Consultar datasheet</a>}</div>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{product.specs.map((spec) => <div key={spec.label} className="rounded-xl bg-slate-50 p-4"><dt className="text-sm text-slate-500">{spec.label}</dt><dd className="mt-2 font-semibold text-slate-900">{spec.value}</dd></div>)}</dl>
        <p className="mt-6 text-sm leading-relaxed text-slate-500">Confira o modelo e a revisão da peça na documentação antes de definir a montagem. Caso precise de uma característica que não aparece aqui, inclua a dúvida na solicitação.</p>
      </section>
    </div>
  );
}
