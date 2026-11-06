import Link from 'next/link';
import { FaUserCog, FaHeadset, FaBolt, FaGraduationCap, FaWhatsapp, FaMicrochip } from 'react-icons/fa';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Estoque Local Pronta Entrega</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Acelerando a Engenharia <br />
              <span className="text-blue-400">e a Inovação Nacional</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              Fundada por especialistas em engenharia, a TechComponentes une <strong>Estoque Ágil</strong> com <strong>Consultoria Ativa</strong> para que pesquisadores e indústrias não parem por falta de hardware homologado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/produtos" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition text-center sm:w-auto w-full">
                Explorar Catálogo
              </Link>
              <a href="https://wa.me/5571999999999" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition text-center sm:w-auto w-full flex items-center justify-center gap-2">
                <FaWhatsapp className="text-green-400" /> Falar com Engenheiro
              </a>
            </div>
            <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-widest font-bold">
              Como: Retirada imediata em nossa Unidade (Av. Eng. Oscar Pontes, 1205 - Salvador/BA) ou envio expresso para todo o país.
            </p>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1608564697071-ddf911d81370?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Laboratório de Engenharia TechComponentes" 
              className="rounded-3xl shadow-2xl border border-white/10 relative z-10 transform hover:rotate-1 transition duration-500"
            />
          </div>
        </div>
      </header>

      {/* Business Trident Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
              O Ecossistema <span className="text-blue-600">TechComponentes</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Nossa atuação é baseada em três pilares fundamentais projetados para acelerar o desenvolvimento tecnológico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            {/* Vendas - Blue */}
            <div className="bg-blue-600 p-12 text-white flex flex-col justify-between group hover:bg-blue-700 transition duration-500">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition duration-500">
                  <FaBolt />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Vendas & Pronta Entrega</h3>
                <p className="text-blue-100 leading-relaxed mb-8">
                  Estoque nacional com componentes homologados e testados. Receba no mesmo dia ou retire em mãos em Salvador-BA.
                </p>
              </div>
              <Link href="/produtos" className="inline-flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                Ver Catálogo Completo <FaBolt className="text-yellow-400" />
              </Link>
            </div>

            {/* Suporte - Red */}
            <div className="bg-red-600 p-12 text-white flex flex-col justify-between group hover:bg-red-700 transition duration-500">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition duration-500">
                  <FaHeadset />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Suporte Técnico Premium</h3>
                <p className="text-red-100 leading-relaxed mb-8">
                  Dúvidas sobre datasheet? Canal exclusivo para <strong>Empresas, Espaços Maker e Instituições</strong> com engenharia ativa.
                </p>
              </div>
              <a href="https://wa.me/5571999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                Acessar Canal B2B/Makers <FaWhatsapp className="text-green-300" />
              </a>
            </div>

            {/* Consultoria - Indigo */}
            <div className="bg-indigo-900 p-12 text-white flex flex-col justify-between group hover:bg-indigo-950 transition duration-500 border-l border-white/10 md:border-l-0">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition duration-500">
                  <FaUserCog />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Consultoria de Hardware</h3>
                <p className="text-indigo-200 leading-relaxed mb-8">
                  Validamos seu BOM (Bill of Materials), auxiliamos no dimensionamento de energia e revisamos esquemáticos.
                </p>
              </div>
              <Link href="/consultoria" className="inline-flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                Conhecer Serviços <FaUserCog className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-950">Destaques do Portfólio</h2>
              <p className="text-gray-600 mt-2">Dispositivos homologados para prototipagem ativa.</p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-4">
              <Link href="/produtos" className="text-gray-500 font-bold hover:text-gray-800 transition py-2">Ver Todos</Link>
              <Link href="/produtos" className="bg-blue-100 text-blue-700 font-bold hover:bg-blue-200 transition py-2 px-4 rounded-lg">Ver Catálogo Completo</Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-20 bg-indigo-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Soluções Corporativas (B2B)</h2>
          <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
            Startups, indústrias e laboratórios demandam previsibilidade. Oferecemos faturamento flexível e suporte sob medida.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/b2b" className="bg-white hover:bg-gray-100 text-blue-950 font-bold py-4 px-8 rounded-xl shadow-lg transition text-center">
              cadastrar empresa
            </Link>
            <Link href="/b2b" className="bg-blue-600 hover:bg-blue-500 text-white border border-blue-400 font-bold py-4 px-8 rounded-xl shadow-lg transition text-center">
              Cadastrar Empresa & Solicitar Linha de Crédito
            </Link>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5571999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-2xl hover:bg-green-600 transition z-50 border-4 border-white transform hover:-translate-y-2"
      >
        <FaWhatsapp className="text-3xl mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wider">chatbot</span>
      </a>
    </div>
  );
}
