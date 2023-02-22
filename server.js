/* 
1. npm init then server.js ,2. npm i express, nodemon
2. nodemon -L server.js",->  use -L  legacy version of nodemon - always update the current changes on local to docker container
3. Our app is running on Linux Env on docker

*/

/* 

FROM node:16 this is our base image to install nodejs OS Linux base image
then we copy package.json and then npm install wil help toh downlaod all dependendies on container
then we [COPY ..] our source code to docker image

COPY ./package*.json ./
-  ./package*.json this is in our current directory and ./ will be working directory inside container

Need to create docker image with terminal
1. docker build -t express-docker-image .
2. docker image ls
3. docker run --rm -d -p 5500:5500 --name express-docker-container express-docker-image 
                                             ->  then we have to run image in docker container + [-d : detach mode - background container run ]
4. docker ps -> will show docker is running
5. docker stop 1f069fa8bbb5                   - will stop docker therefore id is from docker ps when you run 
6. docker run --rm -d -p 5500:5500 -v $(pwd):/app  --name express-docker-container express-docker-image 
                                               -> Map you local changes to docker container changes
7. docker ps - you will get the id [Process Status]
8. docker run --rm -d -p 5500:5600 -v $(pwd):/app  -e PORT='5600'  --name express-docker-container express-docker-image 
9. docker exec -it docker_id bash -->  ls -->  exit ---> Inside docker -it means interactive 
10. docker logs ddcf2f8cfc7a -> container id see the port on which port docker is running
11. docker run --rm -d -p 5500:5600 -v $(pwd):/app  -env-file ./.env  --name express-docker-container express-docker-image  - for multiple ports for docker run
*/

const express = require('express');
const PORT = process.env.PORT || 5500;

const app = express();

app.get('/', (req, res) => {
     return res.send('Node js & Express js with docker');
});

app.listen(PORT, () => {
     console.log(`Listening on port ${PORT}`);
});

const express = require('express');
const apps = express();
