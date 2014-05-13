var log4js = require('log4js');

// Configure the logger appenders
log4js.configure({
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'file',
            filename: './logs/drifter.log',
            maxLogSize: 10240,
            backups: 365,
            category: 'normal'
        }
    ],
    replaceConsole: true
});

var logger = log4js.getLogger('normal');
logger.setLevel('');

// Expose logger
exports = module.exports = logger;
