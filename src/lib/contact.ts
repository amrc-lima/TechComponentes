/** Requests stay with the visitor until they choose where to share them. */
export function getContactHref(message?: string, requestType: 'orcamento' | 'orientacao' = 'orcamento') {
  const params = new URLSearchParams();
  if (requestType === 'orientacao') params.set('tipo', requestType);
  if (message) params.set('mensagem', message);
  return `/b2b${params.size ? `?${params.toString()}` : ''}#orcamento`;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
