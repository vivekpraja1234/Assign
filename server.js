process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');

const app = express();
app.listen(7777);

module.exports = app;

console.log("Server is running...");