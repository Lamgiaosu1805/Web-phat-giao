FROM node:22-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build Vite
RUN npm run build

# Serve tĩnh trực tiếp bằng serve package
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]