"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';
import { FaBox, FaCalendarAlt, FaChevronRight, FaUserCircle, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

const AccountPage = () => {
  const { orders } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden">
            <div className="text-center mb-8 pb-8 border-b border-gray-100">
              <FaUserCircle className="text-6xl text-blue-200 mx-auto mb-4" />
              <h2 className="font-bold text-gray-900">Membro TechMaker</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Nível Bronze</p>
            </div>
            <nav className="space-y-2">
              <Link href="/conta" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-bold transition">
                <FaBox /> Meus Pedidos
              </Link>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition">
                <FaMapMarkerAlt /> Meus Endereços
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition">
                <FaShieldAlt /> Segurança
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Histórico de Pedidos</h1>

          {orders.length === 0 ? (
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-16 text-center">
              <FaBox className="text-5xl text-gray-200 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-6">Você ainda não realizou nenhum pedido conosco.</p>
              <Link href="/produtos" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition">
                Ver Catálogo
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Pedido</p>
                        <p className="font-mono font-bold text-sm">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Data</p>
                        <p className="font-bold text-sm flex items-center gap-1">
                          <FaCalendarAlt className="text-gray-400" /> {order.date}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Total</p>
                        <p className="font-bold text-sm text-blue-900">R$ {order.total.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                        Aguardando WhatsApp
                      </span>
                      <FaChevronRight className="text-gray-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex-shrink-0 relative group">
                          <img src={item.img} alt={item.nome} className="w-16 h-16 rounded-lg object-cover border border-gray-100" />
                          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                            {item.quantity}
                          </span>
                          <div className="absolute top-full left-0 mt-2 bg-gray-900 text-white text-[10px] p-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                            {item.nome}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
