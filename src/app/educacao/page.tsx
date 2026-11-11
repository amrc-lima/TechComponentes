'use client';

import Link from 'next/link';
import { FaArrowRight, FaBookOpen, FaCartPlus, FaClipboardCheck } from 'react-icons/fa';
import { learningPaths } from '@/data/learning';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ContactLink from '@/components/ContactLink';
import { formatCurrency } from '@/lib/contact';

const faqs = [
  { question: 'Preciso comprar tudo para começar?', answer: 'Confira primeiro o que você já tem. As listas são sugestões para as atividades de cada trilha; cabos, alimentação e componentes auxiliares dependem do modelo adquirido. Você pode retirar itens do carrinho antes de preparar o orçamento.' },
  { question: 'Posso ligar qualquer sensor a qualquer placa?', answer: 'Compare alimentação, níveis de sinal, interface e pinagem nos documentos dos dois modelos. Sem essa verificação, a conexão pode não funcionar ou danificar as peças. Descreva as referências no formulário de orientação quando houver dúvida.' },
  { question: 'Como escolher uma peça para manutenção?', answer: 'Comece pela referência e pelas características do componente original. Aparência semelhante não confirma equivalência. Registre o modelo do equipamento e a função da peça para discutir opções de reposição.' },
  { question: 'Como preparar kits para uma turma?', answer: 'Defina a atividade, os componentes usados por grupo e o número de grupos. No formulário para instituições, informe a quantidade de kits e o conteúdo de cada um para gerar uma solicitação organizada.' },
];

export default function EducationPage() {
  const { addItemsToCart, isHydrated } = useCart();
  return (
    <div className="bg-slate-50">
      <header className="bg-gradient-to-br from-blue-900 to-indigo-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">Aprender, experimentar e construir</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Conhecimento que acompanha seu projeto</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">Três trilhas para organizar seus estudos, entender as peças e avançar com atividades práticas. Cada guia conecta o aprendizado aos materiais do catálogo.</p>
          <nav aria-label="Trilhas de aprendizado" className="mt-8 flex flex-wrap gap-3">{learningPaths.map((path) => <a key={path.id} href={`#${path.id}`} className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:bg-white/15">{path.title}</a>)}</nav>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="paths-heading">
        <h2 id="paths-heading" className="mb-3 text-3xl font-extrabold text-slate-900">Escolha sua trilha</h2>
        <p className="mb-9 max-w-3xl leading-relaxed text-slate-600">Comece pelos fundamentos e siga no seu ritmo. Antes de alimentar uma montagem, confira o modelo das peças e as conexões na documentação.</p>
        <div className="space-y-10">
          {learningPaths.map((path, pathIndex) => {
            const materials = path.materials.flatMap((item) => {
              const product = products.find((entry) => entry.id === item.productId);
              return product ? [{ product, quantity: item.quantity }] : [];
            });
            const total = materials.reduce((sum, item) => sum + item.product.precoNumerico * item.quantity, 0);
            return (
              <article id={path.id} key={path.id} className="scroll-mt-32 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="border-b border-slate-100 bg-blue-50/60 p-6 sm:p-8">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">Trilha {pathIndex + 1} · {path.level}</p>
                  <h3 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">{path.title}</h3>
                  <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{path.description}</p>
                </div>
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr_0.75fr]">
                  <div>
                    <h4 className="mb-6 flex items-center gap-2 font-bold text-slate-900"><FaBookOpen className="text-blue-600" aria-hidden="true" /> Guia de estudo e prática</h4>
                    <ol className="space-y-7">{path.steps.map((step, index) => <li key={step.title} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700" aria-hidden="true">{index + 1}</span><div><h5 className="font-bold text-slate-900">{step.title}</h5><p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p><p className="mt-3 border-l-2 border-blue-200 pl-3 text-sm font-medium leading-relaxed text-blue-800">Para conferir: {step.check}</p></div></li>)}</ol>
                    <div className="mt-8 rounded-xl bg-slate-50 p-5"><h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-900"><FaClipboardCheck className="text-blue-600" aria-hidden="true" /> O que registrar ao concluir</h4><p className="text-sm leading-relaxed text-slate-600">{path.outcome}</p></div>
                  </div>
                  <aside className="self-start rounded-2xl border border-slate-200 bg-slate-50 p-5" aria-label={`Materiais da trilha ${path.title}`}>
                    <h4 className="mb-4 text-lg font-bold text-slate-900">Materiais sugeridos</h4>
                    <ul className="space-y-4">{materials.map(({ product, quantity }) => <li key={product.id} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0"><Link href={`/produto/${product.id}`} className="text-sm font-bold text-blue-700 hover:underline">{quantity} × {product.nome}</Link><p className="mt-1 text-sm text-slate-500">{formatCurrency(product.precoNumerico * quantity)}</p></li>)}</ul>
                    <p className="mt-5 border-t border-slate-200 pt-4 text-sm font-bold text-slate-900">Subtotal de referência: {formatCurrency(total)}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">Disponibilidade e condições a confirmar no orçamento.</p>
                    <button type="button" disabled={!isHydrated} onClick={() => addItemsToCart(path.materials)} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-50"><FaCartPlus aria-hidden="true" /> Adicionar lista ao carrinho</button>
                    <Link href="/carrinho" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline">Revisar meu carrinho <FaArrowRight aria-hidden="true" /></Link>
                    <p className="mt-5 rounded-xl bg-white p-4 text-sm leading-relaxed text-slate-600"><strong className="text-slate-800">Confira também: </strong>{path.extraMaterials}</p>
                  </aside>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white py-14" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6"><h2 id="faq-heading" className="mb-8 text-3xl font-extrabold text-slate-900">Dúvidas de quem está começando</h2><div className="space-y-3">{faqs.map((faq) => <details key={faq.question} className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-800">{faq.question}</summary><p className="mt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p></details>)}</div></div>
      </section>
      <section className="bg-indigo-950 px-4 py-14 text-white"><div className="mx-auto max-w-3xl text-center"><h2 className="text-3xl font-extrabold">Transforme a atividade em uma lista de materiais</h2><p className="mt-5 leading-relaxed text-indigo-200">Seja um projeto pessoal, uma bancada de manutenção ou uma turma inteira, descreva o objetivo e organize suas dúvidas antes de escolher as peças.</p><ContactLink message="Gostaria de orientação para organizar a lista de componentes de uma atividade prática." className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-500">Pedir orientação técnica</ContactLink><Link href="/produtos?categoria=kits" className="mt-5 block text-sm font-semibold text-blue-200 hover:text-white">Explorar kits do catálogo</Link></div></section>
    </div>
  );
}
