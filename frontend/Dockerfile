# pull base image
FROM node:18.14.0

# set working directory
WORKDIR /app

# add `/front-end/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install dependencies
COPY package*.json ./
RUN npm install
RUN npm install --save react-twitter-widgets

# add app
COPY . .

# expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]