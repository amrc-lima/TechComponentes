/** Requests stay with the visitor until they choose where to share them. */
export function getContactHref(message?: string, requestType: 'orcamento' | 'orientacao' = 'orcamento') {
  const params = new URLSearchParams();
  if (requestType === 'orientacao') params.set('tipo', requestType);
  if (message) params.set('mensagem', message);
  return `/b2b${params.size ? `?${params.toString()}` : ''}#orcamento`;
}

const envWhatsApp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '').replace(/\D/g, '');

export const WHATSAPP_NUMBER = envWhatsApp || '5571999999999';

function formatWhatsApp(value: string) {
  if (value.length === 13 && value.startsWith('55')) {
    return `+55 ${value.slice(2, 4)} ${value.slice(4, 9)}-${value.slice(9)}`;
  }
  return `+${value}`;
}

export const WHATSAPP_DISPLAY = formatWhatsApp(WHATSAPP_NUMBER);
export const CONTACT_EMAIL = 'contato@techcomponentes.com.br';

export function getWhatsAppHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
