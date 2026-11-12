'use client';

import { useId, useState, useSyncExternalStore } from 'react';
import { FaCopy, FaShareAlt, FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppHref } from '@/lib/contact';

function subscribePointerCoarse(onChange: () => void) {
  const query = window.matchMedia('(pointer: coarse)');
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function getCanShare() {
  return typeof navigator.share === 'function' && window.matchMedia('(pointer: coarse)').matches;
}

const getServerCanShare = () => false;

export default function ContactActions({
  message,
  onPrepared,
  shareTitle = 'Orçamento TechComponentes',
}: {
  message: string;
  onPrepared?: () => void;
  shareTitle?: string;
}) {
  const [feedback, setFeedback] = useState('');
  const [manualCopy, setManualCopy] = useState(false);
  const canShare = useSyncExternalStore(subscribePointerCoarse, getCanShare, getServerCanShare);
  const manualCopyId = useId();

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setFeedback('Resumo copiado. Escolha o contato para quem deseja encaminhar.');
      setManualCopy(false);
      onPrepared?.();
    } catch {
      setManualCopy(true);
      setFeedback('Selecione o resumo abaixo e use a opção Copiar do seu dispositivo.');
    }
  }

  async function share() {
    if (!navigator.share) {
      await copy();
      return;
    }
    try {
      await navigator.share({ title: shareTitle, text: message });
      setFeedback('Compartilhamento concluído. A confirmação do orçamento depende do atendimento.');
      onPrepared?.();
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return;
      setFeedback('Não foi possível compartilhar. Você pode copiar o resumo.');
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        <a
          href={getWhatsAppHref(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setFeedback('Abrindo o WhatsApp com o resumo.')}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 font-bold text-slate-950 transition hover:bg-[#1ebe5a]"
        >
          <FaWhatsapp aria-hidden="true" /> Enviar pelo WhatsApp
        </a>
        <button type="button" onClick={copy} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-slate-950 transition hover:bg-blue-500">
          <FaCopy aria-hidden="true" /> Copiar resumo
        </button>
        {canShare && (
          <button type="button" onClick={share} className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50">
            <FaShareAlt aria-hidden="true" /> Compartilhar resumo
          </button>
        )}
      </div>
      <p className="text-sm text-slate-600" role="status" aria-live="polite">{feedback}</p>
      {manualCopy && (
        <div>
          <label htmlFor={manualCopyId} className="mb-2 block text-sm font-semibold text-slate-700">Resumo para copiar</label>
          <textarea id={manualCopyId} value={message} readOnly rows={8} onFocus={(event) => event.currentTarget.select()} className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm text-slate-800" />
        </div>
      )}
    </div>
  );
}
