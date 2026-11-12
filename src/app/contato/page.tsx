import Link from 'next/link';
import { FaArrowRight, FaClock, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, getWhatsAppHref } from '@/lib/contact';

type Channel = {
  icon: typeof FaWhatsapp;
  title: string;
  value: string;
  description: string;
  href?: string;
  action?: string;
  external?: boolean;
};

const channels: Channel[] = [
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: WHATSAPP_DISPLAY,
    description: 'Para dúvidas rápidas, orçamentos e orientação sobre componentes.',
    href: getWhatsAppHref('Olá! Gostaria de falar com a equipe da TechComponentes.'),
    action: 'Abrir conversa',
    external: true,
  },
  {
    icon: FaEnvelope,
    title: 'E-mail',
    value: CONTACT_EMAIL,
    description: 'Para demandas detalhadas, documentos e contatos institucionais.',
    href: `mailto:${CONTACT_EMAIL}`,
    action: 'Escrever e-mail',
  },
  {
    icon: FaClock,
    title: 'Horário de atendimento',
    value: 'Segunda a sexta, das 9h às 18h',
    description: 'Mensagens recebidas fora do horário são respondidas no próximo dia útil.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Localização',
    value: 'Salvador, Bahia',
    description: 'Atendimento presencial e remoto, conforme a demanda do projeto.',
  },
];

export default function ContatoPage() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 to-indigo-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-300">Fale conosco</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Vamos conversar sobre o seu próximo projeto</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
            Tire dúvidas, peça orientação técnica ou organize uma lista de componentes. Escolha o canal mais confortável para você.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={getWhatsAppHref('Olá! Gostaria de falar com a equipe da TechComponentes.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-7 py-4 font-bold text-slate-950 transition hover:bg-[#1ebe5a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <FaWhatsapp aria-hidden="true" /> Conversar no WhatsApp
            </a>
            <a href="#mensagem" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Enviar uma mensagem <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="canais-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="canais-heading" className="text-3xl font-bold text-gray-900">Canais de atendimento</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
            Atendemos estudantes, técnicos, makers, empresas e instituições. Se não souber por onde começar, envie uma mensagem e ajudamos a direcionar a conversa.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ icon: Icon, title, value, description, href, action, external }) => (
              <article key={title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7">
                <Icon className="mb-5 text-3xl text-blue-700" aria-hidden="true" />
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 font-semibold text-slate-900">{value}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                {href && action && (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    {action} <FaArrowRight aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mensagem" className="scroll-mt-28 border-t border-gray-200 bg-white py-16 sm:py-20" aria-labelledby="mensagem-heading">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <FaPaperPlane className="mb-5 text-4xl text-indigo-600" aria-hidden="true" />
            <h2 id="mensagem-heading" className="text-3xl font-bold text-gray-900">Prepare sua mensagem</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Preencha os campos para gerar um texto que você pode revisar e enviar pelo WhatsApp ou copiar para outro canal.
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Informe o componente ou a aplicação, quando já souber.</li>
              <li>Para orçamentos, inclua quantidades e referências.</li>
              <li>Para instituições, conte o contexto da atividade ou do laboratório.</li>
            </ul>
            <p className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm leading-relaxed text-blue-900">
              A preparação da mensagem não confirma compra, contratação ou disponibilidade. Os detalhes são avaliados no atendimento.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-indigo-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Já tem uma lista de componentes?</h2>
          <p className="mt-5 text-lg leading-relaxed text-indigo-200">Monte seu pedido de orçamento com itens e quantidades, ou fale com a equipe pelo WhatsApp.</p>
          <Link href="/b2b" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-slate-950 transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Preparar orçamento <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
