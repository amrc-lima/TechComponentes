# TechComponentes

Catálogo de componentes eletrônicos com orientação técnica para estudantes, técnicos, makers e empresas. O site permite explorar peças, montar uma lista de materiais, preparar um resumo de orçamento e encaminhá-lo pelo canal de atendimento.

**Site publicado:** https://amrc-lima.github.io/TechComponentes/
**Repositório:** https://github.com/amrc-lima/TechComponentes

## Recursos

- Catálogo com busca, filtros por categoria, público e aplicação, além de ordenação.
- Página de detalhe por produto com especificações, compatibilidade e datasheet.
- Carrinho de componentes com quantidades.
- Geração de resumo de orçamento e compartilhamento/cópia da mensagem.
- Histórico de resumos preparados salvo no navegador.
- Trilhas de educação com listas de materiais que podem ser adicionadas ao carrinho.
- Página para empresas e instituições com formulário de solicitação.

Não há backend. O carrinho e o histórico ficam no `localStorage` do visitante, e a solicitação é montada no cliente para que o usuário copie ou compartilhe.

## Tecnologias

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) com export estático
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/) e [lucide-react](https://lucide.dev/)
- [react-hot-toast](https://react-hot-toast.com/)

## Rodando localmente

Requisitos: Node.js 22 (ou >= 20.9) e npm.

```bash
npm install
npm run dev
```

O projeto define `basePath: "/TechComponentes"`, então o endereço local é:

```
http://localhost:3000/TechComponentes
```

## Scripts

| Script | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site estático em `out/` |
| `npm run start` | Servidor Next (não usado no export estático) |
| `npm run lint` | Executa o ESLint |

## Deploy

O deploy é automático no GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `main`.

1. O workflow instala as dependências com `npm ci`.
2. Executa `npm run build`, que gera a pasta `out/`.
3. Publica o conteúdo de `out/` no GitHub Pages.

O Pages do repositório precisa estar configurado com fonte **GitHub Actions**.

### Publicando em outro repositório

O `basePath` está fixo em `/TechComponentes` em dois lugares:

- `next.config.ts`
- `src/lib/assets.ts`

Se o repositório tiver outro nome (ou for um site de usuário/org, servido na raiz), ajuste os dois arquivos e faça o push.

## Estrutura

```
src/
  app/
    layout.tsx            Layout raiz, fontes e metadados
    page.tsx              Home
    globals.css           Tema (cores, fontes, raios) e estilos base
    produtos/             Catálogo e filtros
    produto/[id]/         Detalhe do produto (generateStaticParams)
    carrinho/             Carrinho e preparação do orçamento
    conta/                Histórico local de resumos
    educacao/             Trilhas de aprendizado
    b2b/                  Empresas e instituições
    consultoria/          Orientação técnica
    sobre/                Sobre a loja
  components/             Header, Footer, cards, busca, formulários etc.
  context/CartContext.tsx Estado do carrinho e histórico (localStorage)
  data/                   Catálogo e trilhas de aprendizado
  lib/                    Contato, orçamentos e helper de assets
public/                   Imagens e arquivos estáticos
```

## Editando o catálogo

Os produtos ficam em `src/data/products.ts`. Cada item segue a interface `Product` (nome, preço, imagem, categoria, especificações, aplicações etc.). Para imagens locais em `public/`, use caminhos como `/minha-imagem.jpg`; o helper `asset()` em `src/lib/assets.ts` adiciona o `basePath` na hora de renderizar.

As trilhas de educação ficam em `src/data/learning.ts`.

## Observações sobre o export estático

- `output: "export"` gera HTML/CSS/JS estáticos em `out/`.
- `trailingSlash: true` faz cada rota virar uma pasta com `index.html`, o que funciona bem no Pages.
- A otimização de imagens do Next está desativada (`images.unoptimized`); imagens externas precisam estar listadas em `remotePatterns` no `next.config.ts`.
- Rotas dinâmicas precisam de `generateStaticParams`; a rota `produto/[id]` gera uma página para cada produto.
- `next/image` não aplica `basePath` automaticamente em imagens locais no export estático, por isso o helper `asset()`.

## Conteúdo e planejamento

A pasta `docs/` reúne materiais de planejamento do projeto (PDFs) e instruções de Docker (`docs/DOCKER.md`).
