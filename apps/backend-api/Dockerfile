FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

FROM node:20-alpine 

WORKDIR /app

COPY --from=builder /app .

EXPOSE 5500

CMD ["npm", "run", "dev"]