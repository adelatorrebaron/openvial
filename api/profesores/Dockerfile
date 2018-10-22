# create a file named Dockerfile
FROM mhart/alpine-node:10.6
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY . /app
EXPOSE 3004
CMD npm start

# Para doquerizar la aplicacion ejecutar el siguiente comando
# docker build -t openvial/microservicio_profesores:1.0 .

# Para ejecutar el docker
# docker run -p 3000:3000 -d --name openvial/ms_profesores openvial/microservicio_profesores:1.0
