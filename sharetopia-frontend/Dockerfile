# BUILD STAGE
FROM node:lts-alpine as build-stage

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build



# PRODUCTION STAGE
FROM nginx:stable-alpine as production-stage

# copy output from build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

# start server
CMD ["nginx", "-g", "daemon off;"]
