FROM node:20.16 AS build

WORKDIR /app

COPY ./package*.json ./

COPY . .

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 1234

# CMD ["nginx", "-g", "daemon off;"]