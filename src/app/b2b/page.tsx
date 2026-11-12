import { Suspense } from 'react';
import { FaBoxes, FaBuilding, FaGraduationCap, FaListAlt } from 'react-icons/fa';
import QuoteForm from '@/components/QuoteForm';

export default function B2BPage() {
  return (
    <div className="bg-white">
      <section className="bg-indigo-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-300">Empresas e instituições</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Componentes e kits para a sua próxima demanda</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-indigo-200">
            Organize uma cotação por quantidade, uma lista para o laboratório ou uma necessidade de fornecimento recorrente com orientação técnica.
          </p>
          <a href="#orcamento" className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-bold text-slate-950 transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Preparar solicitação de orçamento
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="demandas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="demandas-heading" className="text-3xl font-bold text-gray-900">Uma conversa a partir do que você precisa</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
            Estudantes, técnicos, makers, empresas e instituições podem descrever sua demanda. Quantidades, especificações e aplicação ajudam a avaliar as opções para cada projeto.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: FaBoxes, title: 'Orçamentos por quantidade', text: 'Reúna componentes, referências e quantidades para uma análise da lista de materiais de protótipos, manutenção ou produção.' },
              { icon: FaBuilding, title: 'Fornecimento recorrente', text: 'Informe os itens usados com frequência e a periodicidade desejada para conversar sobre o planejamento de reposição.' },
              { icon: FaGraduationCap, title: 'Kits para instituições', text: 'Descreva a atividade, o número de participantes e os componentes desejados para compor kits de aulas e laboratórios.' },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                <Icon className="mb-5 text-3xl text-blue-700" aria-hidden="true" />
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="orcamento" className="scroll-mt-28 border-t border-gray-200 bg-gray-50 py-16 sm:py-20" aria-labelledby="orcamento-heading">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <FaListAlt className="mb-5 text-4xl text-indigo-600" aria-hidden="true" />
            <h2 id="orcamento-heading" className="text-3xl font-bold text-gray-900">Prepare seu pedido de orçamento</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Preencha os detalhes para gerar um resumo que você pode revisar, copiar e encaminhar à equipe pelo canal de sua preferência.
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Inclua o código ou modelo da peça, quando souber.</li>
              <li>Para kits, indique a quantidade de kits e o conteúdo de cada um.</li>
              <li>Para reposições recorrentes, descreva a frequência desejada.</li>
            </ul>
            <p className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm leading-relaxed text-blue-900">
              Preços, disponibilidade, condições e prazos serão definidos na avaliação da demanda. A preparação do resumo não confirma uma compra.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
            <Suspense fallback={<p role="status" className="text-gray-600">Carregando formulário de orçamento…</p>}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
