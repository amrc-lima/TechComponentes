import { FaCogs, FaHeadset, FaMicrochip, FaProjectDiagram } from 'react-icons/fa';
import ContactLink from '@/components/ContactLink';

const services = [
  { icon: FaMicrochip, title: 'Escolha de componentes', text: 'Orientação para comparar características e selecionar peças adequadas à aplicação, do componente básico às plataformas de desenvolvimento.' },
  { icon: FaProjectDiagram, title: 'Compatibilidade entre peças', text: 'Converse sobre tensões, interfaces e conexões da sua lista de materiais antes de avançar com a montagem.' },
  { icon: FaCogs, title: 'Prototipagem e aprendizado', text: 'Apoio para organizar os primeiros passos de projetos práticos, definir os componentes necessários e discutir alternativas.' },
  { icon: FaHeadset, title: 'Reposição e manutenção', text: 'Ajuda na identificação de referências e especificações para discutir opções de reposição em equipamentos e projetos existentes.' },
];

export default function ConsultoriaPage() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 to-indigo-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-300">Atendimento consultivo</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Orientação técnica para escolher e aplicar seus componentes</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">Para quem está aprendendo, criando um protótipo, reparando um equipamento ou planejando uma demanda profissional.</p>
          <ContactLink message="Gostaria de orientação técnica para meu projeto." className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-bold text-slate-950 transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Descrever meu projeto</ContactLink>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="apoio-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="apoio-heading" className="text-3xl font-bold text-gray-900">Como podemos ajudar</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">Estudantes, pesquisadores, docentes, técnicos, makers e empresas encontram apoio para conversar sobre as necessidades de seus projetos.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-white p-7 sm:p-8">
                <Icon className="mb-5 text-3xl text-blue-700" aria-hidden="true" />
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white py-16" aria-labelledby="etapas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="etapas-heading" className="text-3xl font-bold text-gray-900">Comece com o contexto do seu projeto</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { title: 'Descreva a aplicação', text: 'Conte o objetivo, seu estágio atual e as dúvidas que precisa esclarecer. Inclua referências das peças que já utiliza.' },
              { title: 'Reúna os requisitos', text: 'Liste componentes e quantidades, tensões, conexões e outras informações relevantes para avaliar o conjunto.' },
              { title: 'Converse sobre as opções', text: 'Com o resumo em mãos, encaminhe sua demanda à equipe para discutir alternativas, escopo de apoio e eventual orçamento.' },
            ].map((step, index) => (
              <li key={step.title}>
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700" aria-hidden="true">{index + 1}</span>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-indigo-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Qual é a sua próxima aplicação?</h2>
          <p className="mt-5 text-lg leading-relaxed text-indigo-200">Uma lista de componentes e uma breve descrição já ajudam a começar. O formulário prepara uma mensagem para você revisar e encaminhar.</p>
          <ContactLink message="Gostaria de conversar sobre seleção e compatibilidade de componentes para meu projeto." className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-bold text-slate-950 transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Preparar minha solicitação</ContactLink>
        </div>
      </section>
    </div>
  );
}
