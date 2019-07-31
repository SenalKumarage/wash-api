FROM node:10

# Create app directory
WORKDIR / /src/app

# Installing the dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
