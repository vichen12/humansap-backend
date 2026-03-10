FROM node:20-slim

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
COPY prisma ./prisma/

# Instalar TODAS las dependencias (incluyendo devDeps para compilar)
RUN npm ci
RUN npm install -g @nestjs/cli

# Generar cliente de Prisma
RUN npx prisma generate

# Copiar código fuente
COPY . .

# Compilar TypeScript
RUN npm run build

# Eliminar devDependencies después del build
RUN npm prune --production

EXPOSE 10000

CMD ["node", "dist/main"]
