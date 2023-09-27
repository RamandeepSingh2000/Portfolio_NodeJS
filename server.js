// Ramandeep Singh
// 301364879
// 27 Sept, 23

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');
const app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');