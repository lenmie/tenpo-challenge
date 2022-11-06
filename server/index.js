var express = require('express');
var path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const data = require('./db.json');

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
// server.post('/battle', (req, res) => {
//   const { monster1Id, monster2Id } = req.body;

//   if (!monster1Id || !monster2Id) {
//     return res.status(400).jsonp({ message: 'Missing ID' });
//   }

//   const monster1 = data.monsters.find((monster) => monster.id === monster1Id);
//   const monster2 = data.monsters.find((monster) => monster.id === monster2Id);

//   if (!monster1 || !monster2) {
//     return res.status(400).jsonp({ message: 'Invalid ID' });
//   }

//   const monster1Sum =
//     monster1.attack + monster1.defense + monster1.hp + monster1.speed;
//   const monster2Sum =
//     monster2.attack + monster2.defense + monster2.hp + monster2.speed;

//   if (monster1Sum > monster2Sum) {
//     return res.json({ winner: monster1, tie: false });
//   }

//   if (monster2Sum > monster1Sum) {
//     return res.json({ winner: monster2, tie: false });
//   }

//   if (monster1Sum === monster2Sum) {
//     return res.json({ winner: null, tie: true });
//   }
// });

// Use default router

server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});
