require('dotenv').config();
const app = require('./app');
const http = require("http");
PORT = process.env.PORT || 9000;

http.createServer(app).listen(PORT, () => {
  console.log(`Http Listening on port ${PORT}`);
});