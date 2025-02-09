FROM node:12

WORKDIR /usr/src/app

COPY package*.json yarn* ./

RUN yarn

COPY . . 

EXPOSE 3001

CMD ["init.sh"]
