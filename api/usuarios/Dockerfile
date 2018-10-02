# create a file named Dockerfile
#FROM node:9.11.2

#RUN npm install node-gyp -g
#RUN apt-get install python
#RUN apt-get install make
#RUN apt-get install g++

FROM mhart/alpine-node:10.6
RUN npm install node-gyp -g
RUN apk add --no-cache make gcc g++ python

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY . /app
EXPOSE 3001
CMD npm start

# Para doquerizar la aplicacion ejecutar el siguiente comando
# docker build -t openvial/microservicio_usuarios:1.0 .

# Para ejecutar el docker
# docker run -p 3000:3000 -d --name openvial/ms_usuarios openvial/microservicio_usuarios:1.0
