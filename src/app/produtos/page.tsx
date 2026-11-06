"use client";

import React, { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { FaTimes, FaBoxOpen, FaFilter } from 'react-icons/fa';
import { ProductCardSkeleton } from '@/components/Skeleton';

const ProductsList = () => {
  const searchParams = useSearchParams();
  const busca = searchParams.get('busca');
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<string>('default');

  // Extrair categorias únicas
  const categories = useMemo(() => {
    const cats = ['Todos', ...new Set(products.map(p => p.tag))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filtro por busca
    if (busca) {
      const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      const termo = normalize(busca);
      filtered = filtered.filter(p =>
        normalize(p.nome).includes(termo) ||
        normalize(p.desc).includes(termo) ||
        normalize(p.tag).includes(termo)
      );
    }

    // Filtro por categoria
    if (activeCategory !== 'Todos') {
      filtered = filtered.filter(p => p.tag === activeCategory);
    }

    // Ordenação
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.precoNumerico - b.precoNumerico);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.precoNumerico - a.precoNumerico);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (sortBy === 'high-end') {
      filtered.sort((a, b) => (a.tier === 'High-End' ? -1 : 1));
    }

    return filtered;
  }, [busca, activeCategory, sortBy]);

  return (
    <main className="flex-grow">
      <header className="bg-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            {busca ? `Resultados para: "${busca}"` : "Catálogo de Componentes"}
          </h1>
          <p className="text-lg text-blue-200">
            {busca 
              ? `${filteredProducts.length} produto(s) encontrado(s).` 
              : "De resistores SMD a módulos LoRaWAN. Tudo com entrega ágil para a Bahia."
            }
          </p>
        </div>
      </header>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filtros e Ordenação */}
        <div className="mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-2 mb-4 text-gray-700 font-bold">
              <FaFilter className="text-blue-600" />
              <span>Filtrar por Categoria:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition text-sm ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col gap-2">
            <label className="text-gray-700 font-bold text-sm">Ordenar por:</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none font-semibold text-sm shadow-sm cursor-pointer"
            >
              <option value="default">Destaques</option>
              <option value="high-end">Tecnologia High-End</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="name">Nome (A-Z)</option>
            </select>
          </div>
        </div>

        {busca && (
          <div className="mb-8">
            <Link href="/produtos" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold transition text-sm inline-flex items-center border border-gray-200">
              <FaTimes className="mr-2" /> Limpar Busca: "{busca}"
            </Link>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
            <FaBoxOpen className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Poxa, não encontramos nada.</h2>
            <p className="text-gray-500">Tente buscar por termos mais genéricos ou mude a categoria.</p>
          </div>
        )}
      </section>
    </main>
  );
};

const CatalogoPage = () => {
  return (
    <Suspense fallback={
      <main className="flex-grow">
        <div className="bg-indigo-900 h-48"></div>
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => <ProductCardSkeleton key={i} />)}
          </div>
        </div>
      </main>
    }>
      <ProductsList />
    </Suspense>
  );
};

export default CatalogoPage;
