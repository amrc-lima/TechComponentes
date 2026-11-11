# Desenvolvimento com Docker

O ambiente usa Node.js 22, Next.js 16.2.6 e as versões do `package-lock.json`.
Não é necessário instalar Node.js, npm ou pacotes do projeto na máquina.
Docker e Docker Compose devem estar disponíveis.

## Iniciar e parar

Na raiz do projeto:

```bash
docker compose up --build -d
docker compose logs -f web
```

Acesse http://localhost:3000. Para usar outra porta:

```bash
APP_PORT=3001 docker compose up --build -d
```

Para parar e remover o container:

```bash
docker compose down
```

## Arquivos e dependências

- `src/` e `public/` são montados para refletir as edições locais, com acesso
  somente de leitura para o container. As configurações de Next.js, TypeScript,
  PostCSS e ESLint também são montadas.
- `node_modules`, `.next`, `next-env.d.ts` gerado e demais arquivos de execução
  ficam dentro do container. As cópias locais existentes não são utilizadas.
- Ao alterar `package.json` ou `package-lock.json`, execute novamente
  `docker compose up --build -d`. As dependências são instaladas com `npm ci`
  durante a construção da imagem.
- A imagem contém somente o código, os arquivos públicos e as configurações
  explicitamente permitidas em `.dockerignore`.
- O container executa como o usuário `node`. A porta publicada fica acessível
  apenas na própria máquina.

Com o serviço iniciado, comandos de verificação também rodam no container:

```bash
docker compose exec web npm run lint
docker compose exec -e NODE_ENV=production web npm run build
```

Essa imagem executa o servidor de desenvolvimento. A configuração de produção
poderá ser definida quando os requisitos forem atualizados.
Para verificar o build, o comando acima define `NODE_ENV=production` apenas
durante a compilação.

## Estado atual da aplicação

O projeto não exige variáveis de ambiente nem serviços de banco de dados na
configuração atual. Carrinho e histórico de orçamentos ficam no `localStorage`
do navegador.
Os formulários preparam resumos para copiar ou compartilhar pelo navegador, sem
destinatário ou número de telefone predefinido. Preparar um resumo não confirma
uma compra nem envia uma mensagem automaticamente. Imagens remotas e datasheets
externos dependem de acesso à internet.
