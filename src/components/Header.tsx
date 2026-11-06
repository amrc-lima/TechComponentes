"use client";

import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { FaMicrochip, FaHeadset, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <nav className="bg-blue-900 text-white shadow-xl sticky top-0 z-50 border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          
          <div className="flex-shrink-0 font-extrabold text-2xl tracking-wider">
            <Link href="/" className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaMicrochip className="text-blue-400" />
              <span className="uppercase text-xl">tech componentes</span>
            </Link>
          </div>

          <SearchBar />

          <div className="flex items-center space-x-4 relative z-10">
            <Link href="/conta" className="text-white hover:text-blue-300 transition flex items-center gap-2 text-sm font-bold">
              <FaUserCircle size={22} className="text-blue-400" />
              <span className="hidden lg:inline">Minha Conta</span>
            </Link>
            <Link href="/consultoria" className="bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition shadow-lg flex items-center gap-2 border border-red-400">
              <FaHeadset /> suporte
            </Link>
            <Link href="/carrinho" className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition shadow-lg flex items-center gap-2 relative">
              <FaShoppingCart />
              <span>carrinho</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-blue-900">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-start space-x-6 text-sm font-semibold border-t border-blue-800 py-3 mt-2 overflow-x-auto relative z-10">
          <Link href="/produtos" className="hover:text-blue-300 transition whitespace-nowrap">produtos</Link>
          <Link href="/educacao" className="hover:text-blue-300 transition whitespace-nowrap">aprender (maker)</Link>
          <Link href="/consultoria" className="hover:text-blue-300 transition whitespace-nowrap">consultoria maker</Link>
          <Link href="/b2b" className="hover:text-blue-300 transition whitespace-nowrap">acadêmico & b2b</Link>
          <Link href="/sobre" className="hover:text-blue-300 transition whitespace-nowrap">Nossa História</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
