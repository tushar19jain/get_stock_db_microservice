FROM node:14
WORKDIR /app
COPY package*.json ./ 
RUN num install
COPY . .
EXPOSE 4000
CMD [ "node","index.js" ]