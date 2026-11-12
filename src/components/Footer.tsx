import Link from 'next/link';
import { FaArrowRight, FaMicrochip } from 'react-icons/fa';
import ContactLink from '@/components/ContactLink';
import { socialLinks } from '@/data/social';

export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-blue-600 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:gap-16 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 rounded text-xl font-extrabold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
            <FaMicrochip className="text-blue-300" aria-hidden="true" /> TechComponentes
          </Link>
          <p className="mt-4 text-sm leading-relaxed">Componentes, kits e orientação técnica para estudantes, profissionais de manutenção, makers, empresas e instituições.</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Conhecimento para escolher. Componentes para construir.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} da TechComponentes`} title={label} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Explore a TechComponentes">
          <h2 className="mb-5 font-bold text-white">Explore</h2>
          <ul className="space-y-3 text-sm">
            {[
              { href: '/produtos', label: 'Catálogo de componentes' },
              { href: '/educacao', label: 'Educação e guias' },
              { href: '/consultoria', label: 'Orientação técnica' },
              { href: '/b2b', label: 'Empresas e instituições' },
              { href: '/sobre', label: 'Sobre a TechComponentes' },
              { href: '/contato', label: 'Fale conosco' },
              { href: '/conta', label: 'Histórico de solicitações' },
            ].map(({ href, label }) => (
              <li key={href}><Link href={href} className="rounded transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">{label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-5 font-bold text-white">Vamos pensar no seu projeto?</h2>
          <p className="text-sm leading-relaxed">Descreva a aplicação, reúna suas dúvidas ou prepare uma lista de componentes para solicitar um orçamento.</p>
          <ContactLink className="mt-5 inline-flex items-center gap-3 rounded-xl border border-blue-400/40 bg-blue-500/10 px-5 py-3 text-sm font-bold text-blue-200 transition hover:bg-blue-500/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">Solicitar orçamento <FaArrowRight aria-hidden="true" /></ContactLink>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-slate-800 px-4 py-6 text-xs text-slate-400 sm:px-6 lg:px-8">&copy; 2026 TechComponentes.</div>
    </footer>
  );
}
