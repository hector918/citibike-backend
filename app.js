//define the route handlers
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
//define our routes
//root path
app.get('/', (request, response) => {
  console.log(request.socket.remoteAddress)
  response.status(200).json({ data: "Service is running!" });
})

app.use('/citibike', require('./controllers/citibike'));

app.get('*', (request, response) => {
  response.status(404).send("Page not found.");
})

module.exports = app;