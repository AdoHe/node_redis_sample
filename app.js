var express = require('express'),
    env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env],
    app = express();

// Bootstrap express settings
require('./config/express')(app, config);

// Bootstrap routs settings
require('./routes')(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log('server bound at http://localhost:' + port);

// Expose app
exports = module.exports = app;
