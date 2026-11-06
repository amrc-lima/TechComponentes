FROM node:22-bookworm-slim

WORKDIR /app

ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1

# Install only inside the image, using the project's existing lockfile.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund \
    && npm cache clean --force \
    && chown -R node:node /app

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]
