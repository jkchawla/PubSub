# Publish/Subscribe System
Decentralized Publish/Subscribe System

## Start Database

```
mongod
```

## Start Frontend Nodes

```
cd front-end/
cd index1/
docker build -t frontend1 .
docker run -d -p 81:80 frontend1
```
Use your favorite browser to open localhost:81

```
cd front-end/
cd index2/
docker build -t frontend2 .
docker run -d -p 82:80 frontend2
```
Use your favorite browser to open localhost:82

```
cd front-end/
cd index3/
docker build -t frontend3 .
docker run -d -p 83:80 frontend3
```
Use your favorite browser to open localhost:83


## Start Backend Server Nodes

```
cd back-end/
docker build -t backend .
docker run -d -p 8000:8000 backend
docker run -d -p 8001:8000 backend
docker run -d -p 8002:8000 backend
```


### Application was developed and tested on:
* macOS 10.13.6
* Safari 12.0 (13606.2.11)
* npm 5.6.0
* node v8.9.4
* mongod v4.0.2
