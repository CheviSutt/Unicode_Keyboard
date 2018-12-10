const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const port = 3333;
const server = express();
server.use(cors());
server.get('/lookup', async (req, res) => {
  const response = await fetch(`https://unicodelookup.com${req.url}`);
  const data = await response.json();
  res.send(data);
});
server.listen(port);
console.log(`server listening on port: ${port}`);
