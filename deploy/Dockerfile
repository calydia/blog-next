ARG BACKEND_URL
ARG FILES_DOMAIN
FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS build
ARG BACKEND_URL
ARG FILES_DOMAIN
ENV NODE_ENV=production
ENV BACKEND_URL=$BACKEND_URL
ENV FILES_DOMAIN=$FILES_DOMAIN
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ARG BACKEND_URL
ARG FILES_DOMAIN
ENV NODE_ENV=production
ENV BACKEND_URL=$BACKEND_URL
ENV FILES_DOMAIN=$FILES_DOMAIN
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/next.config.js ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run start
