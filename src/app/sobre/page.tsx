import Link from 'next/link';
import { FaArrowRight, FaBookOpen, FaBullseye, FaGraduationCap, FaHeadset, FaMicrochip, FaRegCompass } from 'react-icons/fa';
import ContactLink from '@/components/ContactLink';

const principles = [
  {
    title: 'Curadoria técnica',
    description: 'Valorizar as especificações, a procedência e a adequação de cada componente à aplicação.',
    icon: FaMicrochip,
  },
  {
    title: 'Atendimento próximo',
    description: 'Entender a necessidade de quem estuda, trabalha na manutenção ou desenvolve novas soluções.',
    icon: FaHeadset,
  },
  {
    title: 'Conhecimento compartilhado',
    description: 'Aproximar componentes e aprendizado por meio de referências, guias e orientação técnica.',
    icon: FaBookOpen,
  },
];

export default function SobrePage() {
  return (
    <div className="bg-white">
      <header className="bg-gradient-to-br from-blue-900 to-indigo-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">Sobre a TechComponentes</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Componentes e conhecimento para construir possibilidades.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-blue-100">Uma proposta que conecta o acesso a componentes eletrônicos com a orientação necessária para fazer boas escolhas.</p>
        </div>
      </header>

      <section className="py-16 sm:py-20" aria-labelledby="origin-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-700">Nossa origem</p>
            <h2 id="origin-heading" className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900">Da formação acadêmica à proposta de negócio.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>A TechComponentes nasceu como uma proposta de negócio na disciplina de Empreendedorismo do curso de Sistemas de Informação da Universidade do Estado da Bahia (UNEB), em Salvador.</p>
              <p>Seu planejamento parte da necessidade de aproximar estudantes, técnicos e empresas de componentes eletrônicos de qualidade, com variedade e atendimento consultivo.</p>
              <p>A ideia é unir a escolha das peças ao entendimento da aplicação: da eletrônica básica e da manutenção à prototipagem, à robótica educacional e à automação.</p>
            </div>
          </div>
          <aside className="self-start rounded-3xl border border-blue-100 bg-blue-50 p-8 sm:p-10">
            <FaGraduationCap className="mb-6 text-4xl text-blue-700" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-blue-950">Uma visão que aproxima pessoas e tecnologia</h3>
            <p className="mt-4 leading-relaxed text-blue-900/80">O modelo planejado combina loja física e e-commerce, com curadoria de componentes, conteúdo educativo e apoio técnico presencial e remoto.</p>
            <p className="mt-4 leading-relaxed text-blue-900/80">A Bahia é o ponto de partida dessa proposta, com o objetivo de ampliar o acesso e o atendimento ao longo do seu desenvolvimento.</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20" aria-labelledby="purpose-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="purpose-heading" className="mb-10 text-3xl font-extrabold tracking-tight text-slate-900">O que nos orienta</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <FaBullseye className="mb-5 text-3xl text-blue-700" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-blue-950">Missão</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">Fornecer componentes eletrônicos de qualidade, atendendo às necessidades de clientes com eficiência, confiança e bom atendimento.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <FaRegCompass className="mb-5 text-3xl text-indigo-600" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-blue-950">Visão</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">Ser referência no mercado de componentes eletrônicos, sendo reconhecida pela qualidade dos produtos, inovação e excelência no atendimento.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 id="principles-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">Princípios para cada escolha</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">Uma mesma atenção para quem está montando o primeiro circuito e para quem precisa de uma peça na rotina profissional.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {principles.map(({ title, description, icon: Icon }) => (
              <div key={title}>
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-700"><Icon aria-hidden="true" /></span>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-indigo-950 p-8 text-white sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold">Qual é o seu próximo projeto?</h3>
              <p className="mt-2 leading-relaxed text-indigo-100">Explore o catálogo ou prepare uma solicitação de orientação.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Link href="/produtos" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-950 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">Ver catálogo</Link>
              <ContactLink requestType="orientacao" className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-5 py-3 text-sm font-bold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">Pedir orientação <FaArrowRight aria-hidden="true" /></ContactLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
