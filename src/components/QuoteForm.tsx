'use client';

import { FormEvent, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ContactActions from '@/components/ContactActions';

type Item = { id: number; name: string; quantity: string };

const inputClass = 'w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200';
const labelClass = 'mb-2 block text-sm font-semibold text-gray-800';

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get('mensagem') ?? '';
  const initialType = searchParams.get('tipo') === 'orientacao' ? 'orientacao' : 'orcamento';
  return <QuoteFormContent key={`${initialType}:${initialMessage}`} initialMessage={initialMessage} initialType={initialType} />;
}

function QuoteFormContent({ initialMessage, initialType }: { initialMessage: string; initialType: 'orientacao' | 'orcamento' }) {
  const [requestType, setRequestType] = useState(initialType);
  const requiresItems = requestType === 'orcamento';
  const [items, setItems] = useState<Item[]>([{ id: 0, name: '', quantity: '1' }]);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const nextId = useRef(1);
  const summaryRef = useRef<HTMLHeadingElement>(null);

  function updateItem(id: number, field: 'name' | 'quantity', value: string) {
    setItems(current => current.map(item => item.id === id ? { ...item, [field]: value } : item));
    setSummary('');
  }

  function addItem() {
    const id = nextId.current;
    nextId.current += 1;
    setItems(current => [...current, { id, name: '', quantity: '1' }]);
    setSummary('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (field: string) => String(data.get(field) ?? '').trim();

    const definedItems = items.filter(item => item.name.trim());
    if (!value('name') || !value('profile') || !value('application') || (requiresItems && items.some(item => !item.name.trim())) || definedItems.some(item => !Number.isSafeInteger(Number(item.quantity)) || Number(item.quantity) < 1 || Number(item.quantity) > 1000000)) {
      setError('Preencha nome, perfil e aplicação. Para orçamento, informe os componentes e suas quantidades inteiras.');
      return;
    }

    const message = [
      `${requiresItems ? 'Solicitação de orçamento' : 'Solicitação de orientação técnica'} — TechComponentes`,
      '',
      `Nome: ${value('name')}`,
      `Perfil: ${value('profile')}`,
      value('organization') ? `Organização: ${value('organization')}` : null,
      value('email') ? `E-mail: ${value('email')}` : null,
      '',
      definedItems.length ? 'Componentes e quantidades:' : 'Ainda preciso de ajuda para definir os componentes.',
      ...definedItems.map(item => `• ${Number(item.quantity)} × ${item.name.trim()}`),
      '',
      `Objetivo / aplicação: ${value('application')}`,
      value('deadline') ? `Prazo desejado: ${value('deadline')}` : null,
      value('context') ? `\nContexto da solicitação:\n${value('context')}` : null,
    ].filter(line => line !== null).join('\n');

    setError('');
    setSummary(message);
    requestAnimationFrame(() => summaryRef.current?.focus());
  }

  return (
    <>
      <form onSubmit={handleSubmit} onChange={() => setSummary('')} className="space-y-6" aria-describedby="quote-form-help">
        <p id="quote-form-help" className="text-sm leading-relaxed text-gray-600">Campos com * são obrigatórios. Ao final, revise o resumo antes de compartilhá-lo.</p>
        <div>
          <label htmlFor="quote-type" className={labelClass}>O que você precisa?</label>
          <select id="quote-type" value={requestType} onChange={event => setRequestType(event.target.value as 'orientacao' | 'orcamento')} className={inputClass}>
            <option value="orcamento">Orçamento de componentes ou kits</option>
            <option value="orientacao">Orientação para definir ou escolher componentes</option>
          </select>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-name" className={labelClass}>Nome *</label>
            <input id="quote-name" name="name" autoComplete="name" required maxLength={120} className={inputClass} />
          </div>
          <div>
            <label htmlFor="quote-profile" className={labelClass}>Seu perfil *</label>
            <select id="quote-profile" name="profile" required defaultValue="" className={inputClass}>
              <option value="" disabled>Selecione um perfil</option>
              <option value="Estudante">Estudante</option>
              <option value="Técnico ou maker">Técnico ou maker</option>
              <option value="Empresa">Empresa</option>
              <option value="Instituição de ensino ou pesquisa">Instituição de ensino ou pesquisa</option>
            </select>
          </div>
          <div>
            <label htmlFor="quote-organization" className={labelClass}>Organização <span className="font-normal text-gray-500">(opcional)</span></label>
            <input id="quote-organization" name="organization" autoComplete="organization" maxLength={160} className={inputClass} />
          </div>
          <div>
            <label htmlFor="quote-email" className={labelClass}>E-mail <span className="font-normal text-gray-500">(opcional)</span></label>
            <input id="quote-email" name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} />
          </div>
        </div>

        <fieldset className="space-y-4">
          <legend className="mb-2 font-semibold text-gray-900">Componentes e quantidades {requiresItems ? '*' : '(opcional)'}</legend>
          <p className="text-sm text-gray-600">{requiresItems ? 'Informe uma peça ou um kit por linha. Descreva o conteúdo do kit no objetivo da solicitação.' : 'Se ainda não sabe quais peças usar, deixe a lista em branco e conte sua ideia no objetivo da solicitação.'}</p>
          {items.map((item, index) => (
            <div key={item.id} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="grid gap-3 sm:grid-cols-[1fr_7rem]">
                <div>
                  <label htmlFor={`quote-item-${item.id}`} className={labelClass}>Componente ou kit {index + 1} {requiresItems ? '*' : ''}</label>
                  <input id={`quote-item-${item.id}`} required={requiresItems} maxLength={200} value={item.name} onChange={event => updateItem(item.id, 'name', event.target.value)} placeholder="Ex.: ESP32 DevKit" className={inputClass} />
                </div>
                <div>
                  <label htmlFor={`quote-quantity-${item.id}`} className={labelClass}>Quantidade {requiresItems || item.name.trim() ? '*' : ''}</label>
                  <input id={`quote-quantity-${item.id}`} type="number" min="1" max="1000000" step="1" required={requiresItems || Boolean(item.name.trim())} inputMode="numeric" value={item.quantity} onChange={event => updateItem(item.id, 'quantity', event.target.value)} className={inputClass} />
                </div>
              </div>
              {items.length > 1 && (
                <button type="button" onClick={() => { setItems(current => current.filter(entry => entry.id !== item.id)); setSummary(''); }} aria-label={`Remover componente ${index + 1}`} className="mt-3 rounded px-1 py-1 text-sm font-semibold text-red-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">Remover item</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addItem} className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">Adicionar componente</button>
        </fieldset>

        <div>
          <label htmlFor="quote-application" className={labelClass}>Objetivo / aplicação *</label>
          <textarea id="quote-application" name="application" required maxLength={4000} rows={4} placeholder="Conte o que pretende montar, reparar ou ensinar. Para fornecimento recorrente, informe a frequência desejada." className={inputClass} />
        </div>
        <div>
          <label htmlFor="quote-deadline" className={labelClass}>Prazo desejado <span className="font-normal text-gray-500">(opcional)</span></label>
          <input id="quote-deadline" name="deadline" maxLength={200} placeholder="Ex.: antes do início das aulas ou sem prazo definido" className={inputClass} />
        </div>
        {initialMessage && (
          <div>
            <label htmlFor="quote-context" className={labelClass}>Contexto que você trouxe</label>
            <textarea key={initialMessage} id="quote-context" name="context" defaultValue={initialMessage} maxLength={12000} rows={5} className={inputClass} />
          </div>
        )}
        {error && <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-800">{error}</p>}
        <button type="submit" className="w-full rounded-xl bg-indigo-600 px-5 py-4 font-bold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">Gerar resumo da solicitação</button>
      </form>

      {summary && (
        <section className="mt-8 border-t border-gray-200 pt-8" aria-labelledby="quote-summary-heading">
          <h3 ref={summaryRef} tabIndex={-1} id="quote-summary-heading" className="text-xl font-bold text-gray-900 focus:outline-none">Seu resumo está pronto para encaminhar</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">Revise as informações e copie ou compartilhe com a equipe. A solicitação ainda não foi enviada.</p>
          <label htmlFor="quote-summary" className="sr-only">Resumo da solicitação</label>
          <textarea id="quote-summary" readOnly value={summary} rows={12} className={`${inputClass} my-5 text-sm leading-relaxed`} />
          <ContactActions key={summary} message={summary} shareTitle={`${requiresItems ? 'Orçamento' : 'Orientação técnica'} — TechComponentes`} />
        </section>
      )}
    </>
  );
}
