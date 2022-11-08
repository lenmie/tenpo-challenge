var express = require('express');
var path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const data = require('./db.json');

let reqAmountToErrorCounter = 5;
const MELT_QUERY = 'melt';

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

server.use('/static', express.static(path.join(__dirname, 'public')));

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

server.get('/resto', (req, res) => {
  res.jsonp(data.restos);
});

server.get('/category', (req, res) => {
  res.jsonp(data.category);
});

server.get('/favorite', (req, res) => {
  res.jsonp(data.favorite);
});

server.get('/search', (req, res) => {
  const { query, area } = req.query;
  const payload = [];
  if (!query.toLowerCase().includes(MELT_QUERY)) return [];
  if (reqAmountToErrorCounter <= 0) {
    reqAmountToErrorCounter = 5;
    console.log('mock error dispatched');

    return res.status(500).jsonp({
      error: 'mock internal server error',
    });
  }
  if (area <= 2) {
    payload.push(data.search[0]);
  }

  if (area > 2 && area < 5) {
    payload.push(...data.search.slice(0, 2));
  }

  if (area >= 5) {
    payload.push(...data.search.slice(0, 4));
  }

  reqAmountToErrorCounter--;
  res.jsonp(payload);
});

// Use default router

server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});
