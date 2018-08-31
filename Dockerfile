FROM node:10.9.0

WORKDIR /root/cga/
COPY . ./

RUN npm run create-gen3-app docker
WORKDIR /root/cga/docker

CMD npm start
