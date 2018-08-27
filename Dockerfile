FROM node:10.9.0

WORKDIR /root/cga/
COPY . ./

RUN npm run initialize docker
WORKDIR /root/docker

CMD npm start
