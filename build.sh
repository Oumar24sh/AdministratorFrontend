#!/bin/bash
PLATFORM=linux/amd64
VERSION=0.0.1
IMAGE_NAME=bp_frontend


docker build --build-arg NODE_ENV=production --build-arg PORT=8000 --build-arg BASE_URL="http://bp_backend:8001" --platform $PLATFORM --tag ubi/$IMAGE_NAME:$VERSION  .
docker save ubi/$IMAGE_NAME:$VERSION | gzip > ./images/$IMAGE_NAME-v.$VERSION.tar.gz
