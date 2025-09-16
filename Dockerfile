# ----------------------------
# Stage 1: Build
# ----------------------------
    FROM node:22-bullseye AS builder

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm ci
    
    COPY . .
    RUN npm run build
    
    # ----------------------------
    # Stage 2: Production image
    # ----------------------------
    FROM nginx:alpine
    
    RUN rm -rf /usr/share/nginx/html/*
    
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]