var restify = require('restify');

module.exports = function (server) {
    
    // Work around for curl
    server.use(restify.pre.userAgentConnection());

    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.queryParser());
    server.use(restify.bodyParser());

}
