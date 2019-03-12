import * as jsonServer from 'json-server';
import {Express, Application} from 'express';
import * as fs from 'fs';
import * as https from 'https';
import {handleAuthentication} from './auth';
import {handleAuthorization} from './authz';

const server:Application =jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/login',handleAuthentication);
server.use('/orders', handleAuthorization);

const options={
  key: fs.readFileSync('./backend/keys/key.pem'),
  cert: fs.readFileSync('./backend/keys/cert.pem')
}

// Use default router
server.use(router);

const port=3001
https.createServer(options, server).listen(port,() => {
  console.log(`JSON Server is running on port ${port}`)
})


