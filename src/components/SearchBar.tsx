"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { products, Product } from '@/data/products';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Função para remover acentos (Normalização)
  const normalize = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  // Lógica de busca refinada com normalização
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 0) {
      const normalizedQuery = normalize(value);
      
      const filtered = products.filter(p =>
        normalize(p.nome).includes(normalizedQuery) ||
        normalize(p.tag).includes(normalizedQuery) ||
        normalize(p.desc).includes(normalizedQuery)
      ).slice(0, 6);
      
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (query.trim()) {
      const targetUrl = `/produtos?busca=${encodeURIComponent(query.trim())}`;
      setIsOpen(false);
      setQuery('');
      
      // Forçar navegação em qualquer ambiente
      window.location.href = targetUrl; 
    }
  };

  const navigateToProduct = (id: string) => {
    setIsOpen(false);
    setQuery('');
    router.push(`/produto/${id}`);
  };

  return (
    <div className="w-full md:w-1/3 relative" ref={dropdownRef}>
      <form 
        onSubmit={handleSearch} 
        className="w-full flex relative z-[60]"
        action="#"
      >
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.trim().length > 0 && setIsOpen(true)}
          placeholder="O que você está procurando?"
          className="w-full pl-4 pr-10 py-2.5 rounded-full text-gray-800 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
          autoComplete="off"
        />
        <button 
          type="submit"
          className="absolute right-3 top-2.5 text-gray-500 hover:text-blue-600 transition"
        >
          <FaSearch className="text-lg" />
        </button>
      </form>

      {isOpen && (
        <div className="fixed md:absolute left-4 right-4 md:left-0 md:right-0 top-[80px] md:top-full mt-2 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 z-[9999] max-h-96 overflow-y-auto text-gray-800 py-2 animate-in fade-in slide-in-from-top-1 duration-200">
          {results.length > 0 ? (
            <>
              <div className="px-5 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">Sugestões de Produtos</div>
              {results.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => navigateToProduct(product.id)}
                  className="w-full text-left block px-5 py-4 border-b border-gray-50 last:border-0 hover:bg-blue-50 transition cursor-pointer flex justify-between items-center group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
                      <img src={product.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-800 group-hover:text-blue-700 block line-clamp-1">{product.nome}</span>
                      <span className="text-[10px] text-gray-400 uppercase font-bold">{product.tag}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {product.preco}
                    </span>
                  </div>
                </button>
              ))}
              <button 
                type="button"
                onClick={() => handleSearch()}
                className="w-full py-4 text-center text-sm font-bold text-blue-600 hover:bg-gray-50 transition border-t border-gray-100 flex items-center justify-center gap-2"
              >
                <FaSearch size={12} /> Ver todos os resultados
              </button>
            </>
          ) : (
            <div className="px-4 py-8 text-sm text-gray-500 text-center">
              <div className="text-3xl mb-2">🔍</div>
              Nenhum produto encontrado para &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
