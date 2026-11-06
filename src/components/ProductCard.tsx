"use client";

import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { FaCartPlus, FaMicrochip } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full border border-gray-100">
      <Link href={`/produto/${product.id}`} className="block overflow-hidden relative h-48">
        <Image 
          src={product.img} 
          alt={product.nome} 
          fill
          className="object-cover border-b border-gray-100 transform hover:scale-105 transition duration-300" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {product.tier === 'High-End' && (
          <div className="absolute top-2 left-2 bg-indigo-600 text-white text-[8px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1 z-10">
            <FaMicrochip size={10} /> High-End
          </div>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">{product.tag}</span>
        <Link href={`/produto/${product.id}`} className="hover:text-blue-600 transition">
          <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight h-12 overflow-hidden line-clamp-2">
            {product.nome}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-3">{product.desc}</p>
        <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
          <span className="font-extrabold text-xl text-blue-950">{product.preco}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-100 text-blue-700 p-2.5 rounded hover:bg-blue-200 transition"
            title="Adicionar ao carrinho"
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
