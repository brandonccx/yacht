# Start

Assuming the node server has been built

1. download https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz to current directory, don't rename the file
2. build docker image, run `docker build -t yacht .`
3. run docker container, execute `./run.sh`
   if you are in windows, can manually run `docker run` command in `run.sh`

# Debug

`docker logs -f yacht-server` show and follow the server log
`docker stop/start/restart yacht-server` stop/start/restart the container
`docker rm -f yacht-server` remove the container
