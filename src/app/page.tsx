import Link from 'next/link';
import { FaArrowRight, FaBookOpen, FaBuilding, FaGraduationCap, FaHeadset, FaMicrochip, FaTools } from 'react-icons/fa';
import ContactLink from '@/components/ContactLink';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const audiences = [
  {
    title: 'Estudantes e educação',
    description: 'Conheça os fundamentos, encontre kits e avance nos seus projetos de sala de aula e de pesquisa.',
    href: '/educacao',
    action: 'Aprender e experimentar',
    icon: FaGraduationCap,
    color: 'bg-blue-50 text-blue-700',
  },
  {
    title: 'Técnicos e makers',
    description: 'Explore componentes e ferramentas para a bancada, a manutenção e a próxima ideia que você quer construir.',
    href: '/produtos?publico=tecnicos',
    action: 'Encontrar componentes',
    icon: FaTools,
    color: 'bg-indigo-50 text-indigo-700',
  },
  {
    title: 'Empresas e instituições',
    description: 'Organize sua lista de peças, planeje kits educacionais e converse sobre as necessidades da sua equipe.',
    href: '/b2b',
    action: 'Conhecer as soluções',
    icon: FaBuilding,
    color: 'bg-slate-100 text-slate-700',
  },
];

const highlightIds = ['pote-resistores', 'protoboard', 'arduino-uno', 'kit-iniciante', 'esp32', 'rplidar-a1'];

export default function Home() {
  const highlightedProducts = highlightIds.flatMap((id) => {
    const product = products.find((item) => item.id === id);
    return product ? [product] : [];
  });

  return (
    <div>
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-200">
              <FaMicrochip aria-hidden="true" /> Componentes, conhecimento e orientação
            </span>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Componentes eletrônicos e orientação técnica para <span className="text-blue-300">tirar seu projeto do papel.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/90">
              Encontre componentes, kits e apoio na escolha das peças para estudar, reparar, prototipar e desenvolver soluções.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/produtos" className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-slate-950 shadow-lg transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                Explorar catálogo <FaArrowRight aria-hidden="true" />
              </Link>
              <ContactLink message="Olá! Gostaria de orientação técnica para escolher os componentes do meu projeto." className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                <FaHeadset aria-hidden="true" /> Pedir orientação técnica
              </ContactLink>
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl sm:p-8">
            <div className="mb-8 flex items-center gap-4 border-b border-white/15 pb-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-400/15 text-3xl text-blue-300">
                <FaMicrochip aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Da ideia à bancada</p>
                <p className="mt-2 text-xl font-bold">Cada projeto começa com uma boa escolha.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <FaTools className="mt-1 shrink-0 text-blue-300" aria-hidden="true" />
                <div>
                  <h2 className="font-bold">Peças para construir e reparar</h2>
                  <p className="mt-1 text-sm leading-relaxed text-blue-100/80">Dos componentes básicos aos sensores e módulos de desenvolvimento.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaBookOpen className="mt-1 shrink-0 text-blue-300" aria-hidden="true" />
                <div>
                  <h2 className="font-bold">Conhecimento para avançar</h2>
                  <p className="mt-1 text-sm leading-relaxed text-blue-100/80">Guias e referências para entender como cada componente entra no seu projeto.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaHeadset className="mt-1 shrink-0 text-blue-300" aria-hidden="true" />
                <div>
                  <h2 className="font-bold">Orientação para decidir</h2>
                  <p className="mt-1 text-sm leading-relaxed text-blue-100/80">Conte o que você precisa montar e organize as dúvidas sobre a escolha das peças.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="audiences-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-700">Encontre seu caminho</p>
            <h2 id="audiences-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">O que você quer desenvolver?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">Para aprender, resolver um reparo ou desenvolver uma solução, comece pelo que faz sentido para você.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map(({ title, description, href, action, icon: Icon, color }) => (
              <Link key={href} href={href} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
                <span className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${color}`}>
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mb-8 mt-3 flex-grow text-sm leading-relaxed text-slate-600">{description}</p>
                <span className="inline-flex items-center gap-3 text-sm font-bold text-blue-700">{action} <FaArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20" aria-labelledby="highlights-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-700">Explore o catálogo</p>
              <h2 id="highlights-heading" className="text-3xl font-extrabold tracking-tight text-blue-950">Do básico aos projetos conectados</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">Componentes para a bancada, kits para começar e módulos para explorar novas aplicações.</p>
            </div>
            <Link href="/produtos" className="inline-flex shrink-0 items-center gap-3 self-start rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
              Ver catálogo completo <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlightedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="bg-indigo-950 py-16 text-white sm:py-20" aria-labelledby="guidance-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-300">Orientação técnica</p>
            <h2 id="guidance-heading" className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">A peça certa começa com a pergunta certa.</h2>
            <p className="mt-5 text-lg leading-relaxed text-indigo-100">Qual tensão usar? Os módulos são compatíveis? O que falta na sua lista? Estudantes, profissionais de manutenção, makers e empresas podem começar por essas perguntas.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ContactLink message="Olá! Gostaria de orientação técnica para revisar minha lista de componentes." className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-slate-950 transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                Pedir orientação técnica <FaArrowRight aria-hidden="true" />
              </ContactLink>
              <Link href="/consultoria" className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-4 font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">Conhecer a orientação técnica</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-8">
            <FaBuilding className="mb-5 text-3xl text-blue-300" aria-hidden="true" />
            <h3 className="text-2xl font-bold">Seu projeto envolve uma equipe?</h3>
            <p className="mb-6 mt-4 leading-relaxed text-indigo-100">Reúna os componentes de uma bancada, descreva um kit para uma turma ou prepare a lista de peças de uma aplicação. Uma solicitação organizada ajuda a definir o próximo passo.</p>
            <Link href="/b2b#orcamento" className="inline-flex items-center gap-3 font-bold text-blue-200 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">Solicitar orçamento <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
