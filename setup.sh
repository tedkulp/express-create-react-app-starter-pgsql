#!/bin/bash

yarn install

cd backend
yarn install
cd ..

if [ ! -d "frontend" ]; then
    ./node_modules/.bin/create-react-app frontend
    cp ./Dockerfile.frontend ./frontend/Dockerfile
fi

cd frontend

yarn add axios bluebird bootstrap final-form font-awesome \
lodash moment popper.js prop-types reactdom react-final-form \
react-redux react-router-dom react-router-redux@next reactstrap@next \
redux redux-logger redux-thunk redux-saga serve \
socketio-wildcard socket.io-client

cd src

cp -R ../../frontend-src/* .

cd ../..
