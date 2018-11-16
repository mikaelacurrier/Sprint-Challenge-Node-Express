const server = require('./api/server');
const port = 9000;

server.listen(port, () => console.log(`\n API is running at port ${port} \n`));

module.exports = server;