"use client";

import React from 'react';
import { FaYoutube, FaLightbulb, FaBookReader, FaChalkboardTeacher, FaUserGraduate, FaTools, FaBuilding, FaChild, FaRocket } from 'react-icons/fa';

const EducationPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FaLightbulb className="text-6xl text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Hub de Conhecimento Maker</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Curadoria técnica da TechComponentes: transformando curiosidade em engenharia real para todo o país.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <FaYoutube className="text-red-600 text-4xl" />
            <h2 className="text-3xl font-bold text-gray-900">Aulas & Tutoriais Selecionados (Hardware & Robótica)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition flex flex-col h-full">
              <div className="aspect-video bg-gray-200 relative">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/sv9dDtYnE1g"
                  title="O que é Arduino"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">O que é Arduino, afinal?</h3>
                <p className="text-blue-600 text-[10px] font-bold uppercase mb-4">Manual do Mundo - Aula 1</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">Entenda de uma vez por todas o que é essa placa e por que ela revolucionou a robótica.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition flex flex-col h-full">
              <div className="aspect-video bg-gray-200 relative">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/videoseries?list=PL7CjOZ3q8fMc3OmT7gD7N6sLLFfXsXGZi"
                  title="Curso Arduino"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Curso Completo Arduino</h3>
                <p className="text-blue-600 text-[10px] font-bold uppercase mb-4">Brincando com Ideias</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">Uma trilha completa para você dominar a programação e o hardware do zero.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition flex flex-col h-full">
              <div className="aspect-video bg-gray-200 relative">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/videoseries?list=PLZ8dBTV2_5HSyOXhJ77d-iyt5Z_v_1DPM"
                  title="Curso AVR"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Arduino e AVR Avançado</h3>
                <p className="text-blue-600 text-[10px] font-bold uppercase mb-4">WR Kits</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">Para quem quer ir além: arquitetura de microcontroladores e engenharia de hardware.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">A TechComponentes e o Ecossistema</h2>
            <p className="text-indigo-200 max-w-2xl mx-auto">Nascemos para ser o combustível da inovação tecnológica, apoiando cada etapa da vida maker.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Universitário */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaUserGraduate className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Estudante Universitário</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Seu TCC não pode parar por falta de um sensor. Oferecemos suporte técnico para validação de esquemáticos e linha de crédito exclusiva para garantir que sua graduação termine com sucesso e inovação.
              </p>
            </div>

            {/* Ensino Técnico */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaTools className="text-3xl text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Ensino Técnico</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                A prática é o que forma o profissional. Disponibilizamos ferramentas de precisão e insumos de alta durabilidade para que você monte sua bancada e domine a manutenção e automação industrial na prática.
              </p>
            </div>

            {/* Mercado / Profissional */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaRocket className="text-3xl text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Makers & Mercado</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Do protótipo ao produto final. Ajudamos a selecionar componentes com escala industrial e oferecemos faturamento B2B para facilitar o desenvolvimento de novas soluções e startups.
              </p>
            </div>

            {/* Instituições */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaBuilding className="text-3xl text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Instituições de Ensino</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Parceiros no laboratório. Criamos kits personalizados para o currículo da sua escola ou faculdade, com entrega programada e suporte contínuo para os professores e coordenadores.
              </p>
            </div>

            {/* Crianças - Futuro */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 border border-white/20 lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <FaChild className="text-5xl text-yellow-400 flex-shrink-0 animate-bounce" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Crianças: O Futuro é Maker</h3>
                  <p className="text-blue-50 text-sm leading-relaxed">
                    Acreditamos que o pensamento computacional e a robótica educativa são as novas alfabetizações. Investimos em kits lúdicos e seguros para que a próxima geração cresça criando tecnologia, e não apenas consumindo. O futuro da inovação nasce na curiosidade de uma criança com seu primeiro robô.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Trilhas de Aprendizado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-indigo-50 border border-indigo-100 flex gap-6 items-start">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                <FaBookReader />
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-950 mb-3">Iniciante: O Caminho do Arduino</h3>
                <p className="text-indigo-800 leading-relaxed text-sm">
                  Aprenda eletrônica básica, lógica de programação e como controlar seu primeiro LED. Perfeito para estudantes de primeiro semestre.
                </p>
                <a 
                  href="https://www.youtube.com/playlist?list=PLYjrJH3e_wDNLUTN32WittrpBxeleEqNp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-6 inline-block text-indigo-600 font-bold text-sm hover:underline"
                >
                  Ver Curso Manual Maker →
                </a>
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-blue-50 border border-blue-100 flex gap-6 items-start">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                <FaChalkboardTeacher />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Avançado: IoT & Robótica Pro</h3>
                <p className="text-blue-800 leading-relaxed text-sm">
                  Conecte seus projetos à nuvem e domine a automação de alto nível. Projetos guiados passo a passo.
                </p>
                <a 
                  href="https://www.youtube.com/playlist?list=PL7CjOZ3q8fMc3OmT7gD7N6sLLFfXsXGZi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-6 inline-block text-blue-600 font-bold text-sm hover:underline"
                >
                  Ver Projetos Guiados →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
