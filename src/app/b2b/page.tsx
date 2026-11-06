import React from 'react';
import { FaGraduationCap, FaBuilding, FaHandshake, FaFileInvoiceDollar, FaCheckCircle, FaWhatsapp, FaMicrochip } from 'react-icons/fa';

const B2BPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-950 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Soluções Corporativas & Acadêmicas</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            Faturamento flexível, cotações personalizadas e pacotes especiais para laboratórios e instituições de ensino.
          </p>
        </div>
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
          <FaBuilding size={400} />
        </div>
      </section>

      {/* Student Credit Line - New Strategic Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-blue-100">
            <div className="lg:w-1/2 p-12 bg-blue-600 text-white flex flex-col justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6">
                <FaGraduationCap />
              </div>
              <h2 className="text-3xl font-bold mb-6">Linha de Crédito Estudantil <br/><span className="text-blue-200">Programa Futuros Especialistas</span></h2>
              <p className="text-lg text-blue-50 leading-relaxed mb-8">
                Sabemos que o orçamento de um projeto de graduação é desafiador. Por isso, criamos uma linha de crédito exclusiva para estudantes de engenharia e tecnologia.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" /> 10% de desconto em todo o catálogo maker.
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" /> Pagamento faturado em até 30 dias para TCCs.
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" /> Retirada imediata para prototipagem urgente.
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Como solicitar seu crédito?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold">1</div>
                  <p className="text-gray-600">Apresente seu comprovante de matrícula atualizado de uma instituição parceira.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold">2</div>
                  <p className="text-gray-600">Envie uma breve descrição do seu projeto ou disciplina.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold">3</div>
                  <p className="text-gray-600">Receba seu código de consultor e limite de crédito em até 24h.</p>
                </div>
                <a href="https://wa.me/5571999999999?text=Quero+solicitar+minha+Linha+de+Crédito+Estudantil" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition w-full text-center mt-4">
                  Solicitar via WhatsApp Acadêmico
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services Section - Explicit Offerings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4 italic">Por quê fechar conosco?</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Empresas e instituições na Bahia precisam de <strong>previsibilidade</strong>. O que oferecemos é a eliminação do risco de importação e a garantia de estoque local para que sua produção não pare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                <FaBuilding />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Estoque Programado & JIT</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Não sofra com falta de insumos básicos. Reservamos lotes de componentes (resistores, capacitores, jumpers) exclusivamente para sua instituição com entrega programada semanal ou mensal.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:shadow-md transition">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                <FaMicrochip />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Homologação de Fornecedores Globais</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Precisa de um componente High-End dos EUA ou China para produção em série? Nossa engenharia faz a importação, testa a primeira amostra e garante a procedência para sua linha de montagem.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:shadow-md transition">
              <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                <FaHandshake />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Treinamento Técnico In-Company</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Capacitamos sua equipe de manutenção ou desenvolvimento no uso de novas tecnologias (IoT, LoRaWAN, Visão Computacional) com workshops práticos realizados no seu laboratório.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:shadow-md transition">
              <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                <FaFileInvoiceDollar />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">API de Compras para LabManagers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Integramos nosso estoque diretamente no sistema de gestão do seu laboratório. Seus alunos ou funcionários solicitam componentes e o faturamento é consolidado automaticamente ao fim do mês.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Registration Form Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-tight">Vantagens do Parceiro Corporativo</h2>
              <ul className="space-y-4">
                {[
                  "Prioridade de estoque em lançamentos High-End mundiais.",
                  "Linha de crédito pré-aprovada com faturamento flexível.",
                  "Frete fixo ou grátis para Salvador e região metropolitana.",
                  "Workshop técnico semestral para seus colaboradores.",
                  "Documentação fiscal completa e suporte em licitações."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Solicitar Cadastro B2B</h3>
              <p className="text-gray-600 mb-8 text-sm">
                Preencha as informações básicas para que nossa equipe comercial entre em contato e valide sua conta corporativa.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Instituição ou Empresa</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800" placeholder="Ex: Escola de Robótica BA" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">CNPJ</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800" placeholder="00.000.000/0001-00" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">E-mail Corporativo</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800" placeholder="compras@empresa.com.br" />
                  </div>
                </div>
                <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition mt-4">
                  Enviar para Análise Comercial
                </button>
              </form>
              <div className="mt-6 text-center">
                <span className="text-gray-400 text-sm italic">Atendimento imediato?</span>
                <a 
                  href="https://wa.me/5571999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 text-green-600 font-bold hover:text-green-700 transition"
                >
                  <FaWhatsapp /> Falar com Consultor B2B
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2BPage;
