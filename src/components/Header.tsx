'use client';

import Link from 'next/link';
import { FaHistory, FaMicrochip, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import SearchBar from './SearchBar';

const navigation = [
  { href: '/produtos', label: 'Catálogo' },
  { href: '/educacao', label: 'Educação' },
  { href: '/consultoria', label: 'Orientação técnica' },
  { href: '/b2b', label: 'Empresas e instituições' },
  { href: '/sobre', label: 'Sobre' },
];

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-blue-800 bg-blue-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 py-4 lg:gap-6">
          <Link href="/" aria-label="TechComponentes, início" className="inline-flex shrink-0 items-center gap-2 rounded font-extrabold tracking-tight transition hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
            <FaMicrochip className="text-lg text-blue-300 sm:text-2xl" aria-hidden="true" />
            <span className="text-sm sm:text-lg">TechComponentes</span>
          </Link>

          <div className="order-3 w-full lg:order-2 lg:max-w-xl lg:flex-1 [&>div]:w-full">
            <SearchBar />
          </div>

          <nav aria-label="Histórico e carrinho" className="order-2 ml-auto flex shrink-0 items-center gap-2 sm:gap-4 lg:order-3 lg:ml-0">
            <Link href="/conta" aria-label="Histórico de solicitações" title="Histórico" className="inline-flex items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-semibold text-blue-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
              <FaHistory aria-hidden="true" />
              <span className="hidden sm:inline">Histórico</span>
            </Link>
            <Link href="/carrinho" className="relative inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-xs font-bold transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 sm:text-sm">
              <FaShoppingCart aria-hidden="true" /> Carrinho
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 min-w-5 rounded-full border-2 border-blue-900 bg-blue-200 px-1.5 py-0.5 text-center text-[10px] font-bold text-blue-950">
                  {cartCount}<span className="sr-only"> itens no carrinho</span>
                </span>
              )}
            </Link>
          </nav>
        </div>

        <nav aria-label="Navegação principal" className="flex gap-6 overflow-x-auto border-t border-blue-800 py-3 text-sm font-semibold">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} className="shrink-0 rounded py-1 text-blue-100 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
