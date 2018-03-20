# Create React App & Express Starter

This is a starter project for creating a simple frontend/backend app w/ Express and React/Redux.

It makes a lot of assumptions as far as development environment:

* You're using Docker for Mac.
* You have node and yarn already setup and installed.
* You want to use Postgresql and Redis.

The backend side is using a fixed set of packages. The frontend, however, does a fresh `yarn add` of all required
packages because everything is moving so fast at the moment.

## Setup

Run the setup.sh script. This will 

```bash
git clone https://github.com/tedkulp/express-create-react-app-starter.git my-project
cd my-project
./setup.sh
```

This will do a yarn install to get create-react-app, create the frontend, and then yarn install
all the packages for the frontend as well.

## Running

In the root directory, run `yarn dev`. This will create the docker containers and start them up
with docker-compose and also start another instance of the frontend so that code can be hot reloaded.

## Deployment

TODO
