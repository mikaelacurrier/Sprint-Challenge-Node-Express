const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');



const server = express();
const project = require('./projectRouter');
const action = require('./actionsRouter');

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

//PROJECT REQUESTS
server.use('/api/projects', project);
//ACTION REQUESTS
server.use('/api/actions', action);

module.exports = server;