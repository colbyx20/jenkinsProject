#!/bin/bash

# Build current image
docker build -t colby/myapp .
docker run -d -p 8080:80 colby/myapp

if [ $? -eq 0 ]; then
	echo "Docker image buid was successful"
else
	echo "Error on docker build, check if colby/myapp images already exists"
fi
