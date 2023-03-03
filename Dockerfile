FROM node:16-alpine3.16
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build
EXPOSE 5173
CMD npm start

