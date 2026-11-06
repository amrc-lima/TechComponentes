import React from 'react';
import Link from 'next/link';
import { FaMicrochip, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 border-t-4 border-blue-600 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider flex items-center">
            <FaMicrochip className="text-blue-400 mr-2" /> tech componentes
          </h4>
          <p className="text-sm leading-relaxed mb-4">
            Especialistas em hardware homologado para acelerar o ecossistema de inovação. Atuamos com curadoria técnica e suporte para pesquisadores e indústrias.
          </p>
          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Como: Logística expressa ou retirada em nosso centro de distribuição.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Acesso Rápido</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link href="/produtos" className="hover:text-white transition">produtos</Link>
            <Link href="/produtos#kits" className="hover:text-white transition">kits educacionais</Link>
            <Link href="/b2b" className="hover:text-white transition">empresas b2b</Link>
            <Link href="/consultoria" className="hover:text-white transition">suporte</Link>
            <Link href="/sobre" className="hover:text-white transition">Nossa História</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Hub Regional</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkedAlt className="text-blue-400 mt-1 flex-shrink-0" />
              <span>Av. Eng. Oscar Pontes, 1205, Sala 402<br/>Comércio, Salvador - BA<br/>CEP: 40460-130</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400 flex-shrink-0" /> 
              <span>corporativo@techcomponentes.com.br</span>
            </li>
            <li className="font-bold text-blue-300 pt-2">
              WhatsApp: (71) 99999-9999
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center text-xs text-slate-500 border-t border-slate-800 pt-6">
        &copy; 2026 TechComponentes. Operação Técnica de Alta Performance.
      </div>
    </footer>
  );
};

export default Footer;
