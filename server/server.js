const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for PHP file
server.use('/service.php', (req, res) => {
  res.sendFile(path.join(__dirname, 'service.php'));
});

server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
