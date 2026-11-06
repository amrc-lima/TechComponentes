"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import { FaShoppingCart, FaUserCog, FaCheckCircle, FaExclamationTriangle, FaFilePdf, FaMicrochip, FaShieldAlt, FaTools } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { ProductDetailSkeleton } from '@/components/Skeleton';

const ProductDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const product = products.find(p => p.id === id);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (!product) {
    return (
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FaExclamationTriangle className="text-6xl text-red-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Produto não encontrado</h2>
          <p className="text-gray-500 mb-8">O item que você está procurando pode estar sem estoque ou a URL é inválida.</p>
          <Link href="/produtos" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Voltar ao Catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/produtos" className="hover:text-blue-600 transition">Catálogo</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-semibold">{product.nome}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Imagem e Selos */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col">
              <div className="relative h-96 w-full mb-6">
                <Image 
                  src={product.img} 
                  alt={product.nome} 
                  fill
                  className="object-contain rounded-2xl" 
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.tier === 'High-End' && (
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <FaMicrochip /> High-End Robotics
                  </div>
                )}
              </div>

              {/* Selo de Homologação Profissional */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl shadow-inner">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-sm uppercase">Item Homologado</h4>
                  <p className="text-blue-700 text-xs leading-relaxed">Validado em nosso laboratório em Salvador para garantir conformidade com o datasheet.</p>
                </div>
              </div>
            </div>

            {/* Informações e Ações */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gray-50 border-l border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.tag}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase">Ref: {product.id}</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.nome}
              </h1>
              
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-500 text-xs mb-2 leading-relaxed italic">
                  Ideal para estudantes e empresas que buscam <strong>homologação técnica de alto nível</strong> para evitar queima de hardware e atrasos de projeto.
                </p>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl font-extrabold text-blue-950">{product.preco}</span>
                  <div className="flex flex-col">
                    <span className="text-green-600 text-[10px] font-bold uppercase flex items-center gap-1">
                      <FaCheckCircle /> Pronta Entrega
                    </span>
                    <span className="text-gray-400 text-[9px]">Retirada imediata ou envio ágil</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">Para quê serve? (Contexto)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">Quem deve comprar?</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {product.tier === 'High-End' 
                        ? "Engenheiros de hardware, laboratórios de IA e desenvolvedores de soluções industriais." 
                        : "Estudantes de engenharia, técnicos e hobbistas que precisam de insumos básicos com garantia."}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">Nossa Logística</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Estoque físico centralizado para atendimento rápido. Atendemos com a logística mais eficiente da região.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabela Técnica de Engenharia */}
              <div className="mb-10">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <FaTools className="text-blue-600" /> Especificações de Engenharia
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{spec.label}</p>
                      <p className="text-sm font-bold text-gray-700">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-5 px-8 rounded-2xl shadow-xl flex-grow flex items-center justify-center gap-3 text-lg"
                  >
                    <FaShoppingCart /> Adicionar ao Carrinho
                  </button>
                  {product.datasheetUrl !== "#" && (
                    <a 
                      href={product.datasheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3"
                    >
                      <FaFilePdf className="text-red-600" /> Datasheet
                    </a>
                  )}
                </div>
                <div className="bg-indigo-900/5 p-4 rounded-xl border border-indigo-100 mt-2">
                  <p className="text-xs text-indigo-900 leading-relaxed text-center font-medium">
                    <strong>Como comprar?</strong> Adicione ao carrinho e finalize via WhatsApp. Nossa equipe técnica entrará em contato para combinar a entrega mais rápida para você.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};


export default ProductDetailPage;
