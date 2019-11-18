#!/bin/bash

# install the anuglar dependency
npm install

# build the application
ng build --prod

# remove the container if exists or running
if [ $(docker container ls -a -q --filter name=ngapp_c) != '' ]; then
    docker container stop ngapp_c
    docker container rm ngapp_c
fi

# remove the image if exists
if [ $(docker image ls -a -q --filter reference=ngapp_img) != '' ]; then
    docker image rm ngapp_img
fi

# build the image
docker build -t ngapp_img .

# start the container
docker run -itd -p 8088:80 --name ngapp_c ngapp_img
