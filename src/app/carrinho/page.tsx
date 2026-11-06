"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaTrash, FaShoppingCart, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

const CarrinhoPage = () => {
  const { cart, removeFromCart, clearCart, cartTotal, addOrder } = useCart();

  const handleCheckout = () => {
    const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
    const newOrder = {
      id: `TC-${orderId}`,
      date: new Date().toLocaleDateString('pt-BR'),
      items: [...cart],
      total: cartTotal
    };

    const message = `Olá TechComponentes! Gostaria de finalizar o seguinte pedido (Ref: ${newOrder.id}):\n\n${cart.map(item => `- ${item.nome} (x${item.quantity}): ${item.preco}`).join('\n')}\n\n*Total: R$ ${cartTotal.toFixed(2)}*`;
    
    addOrder(newOrder);
    clearCart();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5571999999999?text=${encodedMessage}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Seu carrinho está vazio</h1>
        <p className="text-gray-500 mb-8 text-lg">Parece que você ainda não adicionou nenhum componente ao seu projeto.</p>
        <Link href="/produtos" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2">
          <FaArrowLeft /> Explorar Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-10 flex items-center gap-3">
        <FaShoppingCart className="text-blue-600" /> Seu Carrinho
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 items-center">
              <img src={item.img} alt={item.nome} className="w-24 h-24 object-cover rounded-lg border border-gray-100" />
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-lg text-gray-900">{item.nome}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.tag}</p>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <span className="text-blue-900 font-bold">{item.preco}</span>
                  <span className="text-gray-400 text-sm">Quantidade: {item.quantity}</span>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 p-2 transition"
                title="Remover item"
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
          
          <div className="flex justify-between items-center pt-6">
            <Link href="/produtos" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
              <FaArrowLeft /> Continuar Comprando
            </Link>
            <button onClick={clearCart} className="text-gray-500 hover:text-gray-700 text-sm font-semibold">
              Limpar Carrinho
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-32">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Resumo do Pedido</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cart.length} itens)</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Frete (Bahia)</span>
                <span className="text-green-600 font-bold">Grátis*</span>
              </div>
              <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                <span className="font-bold text-gray-900">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-blue-950 block">R$ {cartTotal.toFixed(2)}</span>
                  <span className="text-xs text-gray-400 italic">*Para compras acima de R$ 150,00</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-lg"
            >
              <FaWhatsapp className="text-xl" /> Finalizar pelo WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
              Ao clicar em finalizar, você será redirecionado para o nosso WhatsApp para combinar a entrega e o pagamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrinhoPage;
