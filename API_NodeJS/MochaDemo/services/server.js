const http = require('http');
const express = require('express');
const webServerConfig = require('../config/server.js');
const morgan = require('morgan');
const router = require('../routers/routers');
const bodyParser = require('body-parser');
 
let httpServer;
 
function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
   
    if(process.env.NODE_ENV !== 'test') {
      //use morgan to log at command line
      app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
    }
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: 'application/json'}));
    app.get('/', (req, res) => {
      res.end('Hello World!');
    });
    app.use('/v1', router.router_porduct);
    httpServer = http.createServer(app);
    httpServer.listen(webServerConfig.port)
      .on('listening', () => {
        console.log(`Web server listening on localhost:${webServerConfig.port}`);
 
        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}
 
module.exports.initialize = initialize;

 
function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
 
      resolve();
    });
  });
}
 
module.exports.close = close;