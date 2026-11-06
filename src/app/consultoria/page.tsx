import React from 'react';
import { FaHeadset, FaMicrochip, FaCogs, FaProjectDiagram, FaWhatsapp } from 'react-icons/fa';

const ConsultoriaPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaHeadset className="text-6xl text-red-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Suporte & Consultoria Maker</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Não vendemos apenas componentes. Garantimos que seu projeto saia do papel com o dimensionamento correto e suporte especializado.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Engenharia Especializada a Seu Serviço</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa equipe técnica valida seu projeto para que você não perca tempo nem dinheiro com componentes errados ou incompatíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <p className="text-[10px] font-bold text-blue-600 uppercase mb-2">O quê: Validação</p>
              <FaMicrochip className="text-4xl text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análise de Bill of Materials (BOM)</h3>
              <p className="text-gray-600 leading-relaxed">
                Envie sua lista de compras. Verificamos se o sensor X conversa com o microcontrolador Y e se as tensões são compatíveis. <strong>Por quê?</strong> Para evitar que seu hardware queime no primeiro boot.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <p className="text-[10px] font-bold text-green-600 uppercase mb-2">Para quem: Pesquisadores</p>
              <FaProjectDiagram className="text-4xl text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentoria para Projetos Complexos</h3>
              <p className="text-gray-600 leading-relaxed">
                Foco total em estudantes e pesquisadores de grandes instituições. Auxiliamos na montagem do Proof of Concept (PoC) e na escolha da melhor arquitetura de hardware para o seu objetivo.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <p className="text-[10px] font-bold text-purple-600 uppercase mb-2">Para quê: Confiabilidade</p>
              <FaCogs className="text-4xl text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dimensionamento de Energia</h3>
              <p className="text-gray-600 leading-relaxed">
                Calculamos a autonomia de baterias e dimensionamos reguladores. <strong>Como?</strong> Através de cálculos de consumo real de corrente, garantindo que seu projeto IoT funcione fora da tomada.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <p className="text-[10px] font-bold text-red-600 uppercase mb-2">Quanto: Acessibilidade</p>
              <FaHeadset className="text-4xl text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suporte Básico Gratuito</h3>
              <p className="text-gray-600 leading-relaxed">
                Tire dúvidas rápidas sobre qualquer item do catálogo via WhatsApp. Para clientes TechComponentes, o suporte de bancada inicial é <strong>custo zero</strong>. Projetos complexos sob orçamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Canal de Suporte Especializado</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Nossos técnicos estão prontos para atender demandas complexas de <strong>Empresas, Espaços Maker e Instituições</strong> via canal direto de engenharia.
          </p>
          <a 
            href="https://wa.me/5571999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl transition text-xl"
          >
            <FaWhatsapp size={32} /> Acessar Suporte B2B/Maker
          </a>
          <p className="mt-6 text-blue-300 text-sm italic">
            *Consultoria técnica ativa para parceiros homologados e instituições de ensino.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConsultoriaPage;
