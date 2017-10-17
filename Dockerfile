FROM node:8.6.0-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json /usr/src/app
COPY . /usr/src/app

RUN npm install

# Bundle app source
CMD [ "npm", "run build" ]

EXPOSE 9000
CMD [ "npm", "start" ]