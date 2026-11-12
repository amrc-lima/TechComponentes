'use client';

import { FormEvent, useRef, useState } from 'react';
import ContactActions from '@/components/ContactActions';

const inputClass = 'w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200';
const labelClass = 'mb-2 block text-sm font-semibold text-gray-800';

export default function ContactForm() {
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const summaryRef = useRef<HTMLHeadingElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (field: string) => String(data.get(field) ?? '').trim();
    const name = value('name');
    const email = value('email');
    const subject = value('subject');
    const messageText = value('message');

    if (!name || !subject || !messageText) {
      setError('Preencha nome, assunto e mensagem para preparar o contato.');
      return;
    }

    const message = [
      'Contato pelo site — TechComponentes',
      '',
      `Nome: ${name}`,
      email ? `E-mail: ${email}` : null,
      `Assunto: ${subject}`,
      '',
      'Mensagem:',
      messageText,
    ].filter(line => line !== null).join('\n');

    setError('');
    setSummary(message);
    requestAnimationFrame(() => summaryRef.current?.focus());
  }

  return (
    <>
      <form onSubmit={handleSubmit} onChange={() => setSummary('')} className="space-y-5" aria-describedby="contact-form-help">
        <p id="contact-form-help" className="text-sm leading-relaxed text-gray-600">Campos com * são obrigatórios. Ao final, revise a mensagem antes de enviar pelo WhatsApp.</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>Nome *</label>
            <input id="contact-name" name="name" autoComplete="name" required maxLength={120} className={inputClass} />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>E-mail <span className="font-normal text-gray-500">(opcional)</span></label>
            <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="contact-subject" className={labelClass}>Assunto *</label>
          <select id="contact-subject" name="subject" required defaultValue="" className={inputClass}>
            <option value="" disabled>Selecione um assunto</option>
            <option value="Dúvida sobre um componente">Dúvida sobre um componente</option>
            <option value="Orçamento de componentes ou kits">Orçamento de componentes ou kits</option>
            <option value="Orientação técnica">Orientação técnica</option>
            <option value="Empresas, instituições e parcerias">Empresas, instituições e parcerias</option>
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className={labelClass}>Mensagem *</label>
          <textarea id="contact-message" name="message" required maxLength={4000} rows={6} placeholder="Conte como podemos ajudar." className={inputClass} />
        </div>
        {error && <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-800">{error}</p>}
        <button type="submit" className="w-full rounded-xl bg-indigo-600 px-5 py-4 font-bold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">Preparar mensagem</button>
      </form>

      {summary && (
        <section className="mt-8 border-t border-gray-200 pt-8" aria-labelledby="contact-summary-heading">
          <h3 ref={summaryRef} tabIndex={-1} id="contact-summary-heading" className="text-xl font-bold text-gray-900 focus:outline-none">Sua mensagem está pronta</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">Revise o texto e envie pelo WhatsApp ou copie para encaminhar por outro canal. A mensagem ainda não foi enviada.</p>
          <label htmlFor="contact-summary" className="sr-only">Resumo da mensagem</label>
          <textarea id="contact-summary" readOnly value={summary} rows={9} className={`${inputClass} my-5 text-sm leading-relaxed`} />
          <ContactActions key={summary} message={summary} shareTitle="Contato — TechComponentes" />
        </section>
      )}
    </>
  );
}
