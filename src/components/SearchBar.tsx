'use client';

import { useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { products } from '@/data/products';
import { formatCurrency } from '@/lib/contact';

function normalize(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputId = useId();
  const listId = useId();
  const term = normalize(query.trim());
  const results = term ? products.filter((product) => normalize([
    product.nome, product.id, product.tag, product.desc,
    ...product.specs.flatMap((spec) => [spec.label, spec.value]),
  ].join(' ')).includes(term)).slice(0, 6) : [];
  const showResults = isOpen && term.length > 0;

  useEffect(() => {
    function closeOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    document.addEventListener('mousedown', closeOutside);
    return () => document.removeEventListener('mousedown', closeOutside);
  }, []);

  function navigate(href: string) {
    setIsOpen(false);
    setActiveIndex(-1);
    setQuery('');
    router.push(href);
  }
  function search(event?: FormEvent) {
    event?.preventDefault();
    if (query.trim()) navigate(`/produtos?busca=${encodeURIComponent(query.trim())}`);
  }
  function keyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
    } else if (event.key === 'ArrowDown' && results.length) {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((index) => (index + 1) % results.length);
    } else if (event.key === 'ArrowUp' && results.length) {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((index) => index <= 0 ? results.length - 1 : index - 1);
    } else if (event.key === 'Enter' && showResults && activeIndex >= 0 && results[activeIndex]) {
      event.preventDefault();
      navigate(`/produto/${results[activeIndex].id}`);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full" onBlur={(event) => { if (!containerRef.current?.contains(event.relatedTarget as Node)) setIsOpen(false); }}>
      <form onSubmit={search} role="search" className="relative">
        <label htmlFor={inputId} className="sr-only">Buscar componentes por nome, código ou especificação</label>
        <input id={inputId} type="search" value={query} onChange={(event) => { setQuery(event.target.value); setIsOpen(true); setActiveIndex(-1); }} onFocus={() => setIsOpen(true)} onKeyDown={keyDown}
          role="combobox" aria-autocomplete="list" aria-expanded={showResults} aria-controls={listId} aria-activedescendant={showResults && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
          placeholder="Nome, código ou especificação" autoComplete="off" className="w-full rounded-xl border border-blue-200 bg-white py-3 pl-4 pr-12 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-300" />
        <button type="submit" aria-label="Buscar no catálogo" className="absolute inset-y-0 right-0 rounded-r-xl px-4 text-blue-700 hover:bg-blue-50"><FaSearch aria-hidden="true" /></button>
      </form>
      {showResults && (
        <div className="absolute inset-x-0 top-full z-60 mt-2 max-h-96 overflow-y-auto rounded-xl border border-slate-200 bg-white text-slate-800 shadow-xl">
          <div id={listId} role="listbox" aria-label="Sugestões de componentes">
            {results.map((product, index) => (
              <button key={product.id} id={`${listId}-${index}`} type="button" role="option" aria-selected={activeIndex === index} onClick={() => navigate(`/produto/${product.id}`)} className={`flex w-full items-center gap-3 border-b border-slate-100 p-4 text-left hover:bg-blue-50 ${activeIndex === index ? 'bg-blue-50' : ''}`}>
                <Image src={product.img} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-lg object-contain" />
                <span className="min-w-0 flex-1"><span className="block text-sm font-semibold">{product.nome}</span><span className="text-xs text-slate-500">{product.id}</span></span>
                <span className="shrink-0 text-xs font-bold text-blue-800">{formatCurrency(product.precoNumerico)}</span>
              </button>
            ))}
          </div>
          {!results.length && <p className="p-5 text-sm text-slate-500" role="status">Nenhum componente encontrado para “{query}”.</p>}
          <button type="button" onClick={() => search()} className="w-full p-4 text-sm font-bold text-blue-700 hover:bg-blue-50">Ver todos os resultados</button>
        </div>
      )}
    </div>
  );
}
