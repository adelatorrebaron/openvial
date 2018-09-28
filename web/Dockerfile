#FROM node:9.11.2

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
#ADD package.json /tmp/package.json
#RUN cd /tmp && npm install
#RUN mkdir -p /app && cp -a /tmp/node_modules /app

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
#WORKDIR /app
#ADD . /app

#RUN npm run build
#RUN rm -rf ./build
#RUN rm -rf ./test
#RUN rm -rf ./src

#ENV PORT = 3000

#EXPOSE 3000

#CMD [ "npm", "start" ]


# build stage
#FROM node:9.11.1-alpine as build-stage
FROM mhart/alpine-node:10.6 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]