# Start

Assuming the node server has been built

1. download https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz to current directory, don't rename the file
2. build docker image, run `docker-compose build`
3. run docker containers, run `docker-compose up -d`
   if you are in windows, modify the volumes url to windows mode in `docker-compose.yml`

# Debug

`docker-compose stop/start` stop/start all containers of yacht
`docker-compose up -d --force-recreate` force to recreate the containers

`docker logs -f yacht-webapp` show and follow the server log
`docker stop/start/restart yacht-webapp` stop/start/restart the container

