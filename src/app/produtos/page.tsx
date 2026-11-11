'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaBoxOpen, FaSearch } from 'react-icons/fa';
import { products, productCategories, productAudiences, productApplications } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ContactLink from '@/components/ContactLink';

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const fieldClass = 'w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200';

function ProductsList() {
  const params = useSearchParams();
  const router = useRouter();
  const search = params.get('busca')?.trim() ?? '';
  const category = productCategories.some((item) => item.value === params.get('categoria')) ? params.get('categoria')! : '';
  const audience = productAudiences.some((item) => item.value === params.get('publico')) ? params.get('publico')! : '';
  const application = productApplications.some((item) => item.value === params.get('aplicacao')) ? params.get('aplicacao')! : '';
  const sort = params.get('ordem') ?? 'default';
  function updateFilter(name: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(name, value); else next.delete(name);
    router.replace(`/produtos${next.size ? `?${next}` : ''}`, { scroll: false });
  }
  const filtered = products.filter((product) => {
    const text = [product.nome, product.id, product.tag, product.desc, ...product.specs.map((spec) => `${spec.label} ${spec.value}`)].join(' ');
    return (!search || normalize(text).includes(normalize(search))) && (!category || product.category === category) && (!audience || product.audiences.includes(audience)) && (!application || product.applications.includes(application));
  }).sort((a, b) => {
    if (sort === 'price-asc') return a.precoNumerico - b.precoNumerico;
    if (sort === 'price-desc') return b.precoNumerico - a.precoNumerico;
    if (sort === 'name') return a.nome.localeCompare(b.nome, 'pt-BR');
    if (sort === 'high-end') return Number(b.tier === 'High-End') - Number(a.tier === 'High-End');
    return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
  });
  const hasFilters = Boolean(search || category || audience || application || sort !== 'default');
  return (
    <div>
      <header className="bg-indigo-950 px-4 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-300">Escolha a partir do seu projeto</p><h1 className="text-4xl font-extrabold sm:text-5xl">Catálogo de componentes</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-indigo-200">Explore peças para aprender, reparar e desenvolver. Compare aplicações e especificações antes de preparar seu orçamento.</p></div>
      </header>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-label="Busca e filtros do catálogo">
        <form onSubmit={(event) => { event.preventDefault(); updateFilter('busca', String(new FormData(event.currentTarget).get('busca') ?? '').trim()); }} className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="flex-1"><label htmlFor="catalog-search" className="mb-2 block text-sm font-semibold text-slate-700">Buscar por nome, referência ou especificação</label><input key={search} id="catalog-search" name="busca" defaultValue={search} placeholder="Ex.: ESP32, sensor ou I2C" className={fieldClass} /></div>
          <button type="submit" className="inline-flex items-center justify-center gap-2 self-end rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"><FaSearch aria-hidden="true" /> Buscar</button>
        </form>
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-2 lg:grid-cols-4">
          <div><label htmlFor="catalog-category" className="mb-2 block text-sm font-semibold text-slate-700">Categoria</label><select id="catalog-category" value={category} onChange={(event) => updateFilter('categoria', event.target.value)} className={fieldClass}><option value="">Todas as categorias</option>{productCategories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></div>
          <div><label htmlFor="catalog-audience" className="mb-2 block text-sm font-semibold text-slate-700">Seu perfil</label><select id="catalog-audience" value={audience} onChange={(event) => updateFilter('publico', event.target.value)} className={fieldClass}><option value="">Todos os perfis</option>{productAudiences.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></div>
          <div><label htmlFor="catalog-application" className="mb-2 block text-sm font-semibold text-slate-700">Aplicação</label><select id="catalog-application" value={application} onChange={(event) => updateFilter('aplicacao', event.target.value)} className={fieldClass}><option value="">Todas as aplicações</option>{productApplications.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></div>
          <div><label htmlFor="catalog-sort" className="mb-2 block text-sm font-semibold text-slate-700">Ordenar por</label><select id="catalog-sort" value={sort} onChange={(event) => updateFilter('ordem', event.target.value)} className={fieldClass}><option value="default">Destaques</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option><option value="name">Nome A–Z</option><option value="high-end">Dispositivos avançados</option></select></div>
        </div>
        <div className="my-7 flex flex-wrap items-center justify-between gap-3"><p role="status" aria-live="polite" className="text-sm text-slate-600">{filtered.length} componente(s){search ? ` para “${search}”` : ''}</p>{hasFilters && <Link href="/produtos" className="text-sm font-bold text-blue-700 hover:underline">Limpar filtros e busca</Link>}</div>
        {filtered.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><FaBoxOpen className="mx-auto mb-4 text-4xl text-blue-200" aria-hidden="true" /><h2 className="text-xl font-bold text-slate-900">Nenhum componente com essa combinação</h2><p className="my-4 text-slate-600">Tente outra referência ou remova alguns filtros. Você também pode descrever o que precisa no orçamento.</p><ContactLink requestType="orcamento" message={`Procuro um componente para meu projeto: ${search || 'gostaria de orientação na escolha.'}`} className="font-bold text-blue-700 hover:underline">Descrever minha necessidade</ContactLink></div>}
      </section>
    </div>
  );
}
export default function ProductsPage() {
  return <Suspense fallback={<div role="status" className="mx-auto max-w-7xl px-4 py-16 text-slate-600">Carregando catálogo…</div>}><ProductsList /></Suspense>;
}
