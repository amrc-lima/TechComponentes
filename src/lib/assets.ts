export const basePath = '/TechComponentes';

export function asset(path: string) {
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
