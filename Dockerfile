FROM node:alpine

RUN npm install

RUN npm run build

CMD ["npm", "run start"]