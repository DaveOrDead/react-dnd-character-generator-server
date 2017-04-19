# D&D Character Gen - Server

This is the backend for the React D&D character gen. This includes database calls and goes as far forwards as responding to api calls. The repo for the client side can be found [here](https://github.com/DaveOrDead/react-dnd-character-generator/)

## Built using

- [Node.js](http://nodejs.org/)
- [Express](http://expressjs.com/)
- [PostgreSQL](http://www.postgresql.org/)
- [Heroku](http://www.heroku.com)


## Getting Started

### Database

1. Install Postgres [Windows](http://www.enterprisedb.com/products-services-training/pgdownload#windows) | [Mac](http://postgresapp.com/)

2. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)

3. You’ll need to export the DATABASE_URL environment variable for your app to connect to it when running locally: `export DATABASE_URL=postgres:///$(whoami)`

4. Pull the master database: `heroku pg:pull DATABASE_URL db_dnd --app dnd-character-gen-server`  - this command will create a new local database named “db_dnd” and then pull data from our master database. In order to prevent accidental data overwrites and loss, the local database must not exist. You will be prompted to drop an already existing local database before proceeding.  Feel free to name your local db whatever you like.

### Server

1. Install [Node.js](http://nodejs.org/)

2. `git clone https://github.com/DaveOrDead/react-dnd-character-generator-server` or clone your own fork

3. Create a `.env` file in the server root folder.  This file may later contain passwords etc so DO NOT check it into git.  Change the first line to contain the name of your local database.

4. `cd` to wherever you cloned the repo

5. run `npm install`

6. run `foreman start web`

7. The server should now be running on [localhost:5000](http://localhost:5000/).
There is nothing located at the root address / - You should get a response from [localhost:5000/api/alignments](http://localhost:5000/api/alignments)

##### Windows users

If foreman gives you problems, or exits with error code 8 for no reason, try using the node version instead of the ruby version:

```
npm install -g foreman
nf start
```

## Deployment

The app is set to automatically deploy from the master branch to: [https://dnd-character-gen-server.herokuapp.com](https://dnd-character-gen-server.herokuapp.com)

## Directory Structure

```sh
├── api/
│   ├── alignments/
│   │   ├──  index.js
│   │   └──  alignments.endpoints.js
│   │
│
├── config/
│   └──  express.js
│
│
├──  schema/
├──  .git/
├──  nodes_modules/
├──  .gitignore
├──  app.js
├──  app.json
├──  Procfile
├──  routes.js
├──  package.json
├──  sample.env
├──  .env
```


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
- [Heroku and Postgres](https://devcenter.heroku.com/articles/heroku-postgresql)

