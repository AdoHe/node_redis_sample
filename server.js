var restify = require('restify'), 
    options = require('./config/options'),
    server = restify.createServer(options);

// Bootstrap restify settings
require('./config/restify')(server);

// Bootstrap routs settings
require('./routes')(server);

var port = process.env.PORT || 3000;
server.listen(port);
console.log('server bound at http://localhost:' + port);

// Expose server 
exports = module.exports = server;
