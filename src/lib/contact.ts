/** Requests stay with the visitor until they choose where to share them. */
export function getContactHref(message?: string, requestType: 'orcamento' | 'orientacao' = 'orcamento') {
  const params = new URLSearchParams();
  if (requestType === 'orientacao') params.set('tipo', requestType);
  if (message) params.set('mensagem', message);
  return `/b2b${params.size ? `?${params.toString()}` : ''}#orcamento`;
}

export const WHATSAPP_NUMBER = '5571999999999';
export const WHATSAPP_DISPLAY = '+55 71 99999-9999';
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
