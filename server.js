// Require Packages Module
const express =  require ('express');
const server = express();

// Build Port
const port = process.env.PORT || 8080;

// Require Directory Routes
const app = require('./app');

// Server Use Directory
server.use('/', app)

// Build Server
server.listen(port,() => {
    console.log(`Server Running on port ${port}`);
});