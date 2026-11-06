import React from 'react';

const SobrePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Nossa História</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Nascemos da necessidade de transformar o acesso a componentes eletrônicos de alta performance no estado da Bahia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 italic">"Mais que uma loja, um parceiro de bancada."</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  A TechComponentes foi idealizada em 2026 por <span className="font-bold text-blue-900">Eduardo Américo</span> e <span className="font-bold text-blue-900">Jonas</span>, então estudantes de engenharia na UNEB, ao perceberem a dificuldade latente de encontrar componentes homologados com suporte técnico especializado em Salvador.
                </p>
                <p>
                  O que começou como um pequeno estoque para atender colegas de curso, rapidamente evoluiu para um modelo de negócio híbrido. Hoje, unimos a agilidade de um e-commerce moderno com a profundidade técnica de uma consultoria de hardware.
                </p>
                <p>
                  Nosso diferencial está na curadoria. Cada sensor, microcontrolador ou ferramenta em nosso catálogo passa por uma validação rigorosa. Não vendemos apenas peças; entregamos a segurança de que seu projeto irá funcionar.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Equipe Técnica" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-lg shadow-xl hidden sm:block">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm uppercase tracking-wider font-semibold">Baiana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Nossos Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6 font-bold">01</div>
              <h3 className="text-xl font-bold mb-4">Curadoria Técnica</h3>
              <p className="text-gray-600">Selecionamos apenas fabricantes de primeira linha, garantindo que a folha de dados (datasheet) corresponda à realidade.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6 font-bold">02</div>
              <h3 className="text-xl font-bold mb-4">Agilidade Regional</h3>
              <p className="text-gray-600">Entendemos a urgência de um projeto. Nosso estoque está em Salvador, pronto para entrega imediata em toda a Bahia.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6 font-bold">03</div>
              <h3 className="text-xl font-bold mb-4">Educação Maker</h3>
              <p className="text-gray-600">Acreditamos no poder do conhecimento. Produzimos conteúdo técnico para ajudar a nossa comunidade a evoluir.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;
