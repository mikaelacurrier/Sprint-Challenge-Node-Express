const express = require('express');


const server = express();
const project = require('./projectRouter');
const action = require('./actionsRouter');
const middleware = require('./config/middleware');

middleware(server);

//PROJECT REQUESTS
server.use('/api/projects', project);
//ACTION REQUESTS
server.use('/api/actions', action);

module.exports = server;