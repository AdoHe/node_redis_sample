module.exports = {
    development: {
        redis: {
            host: 'localhost',
            port: 6379
        }
    },
    test: {
    },
    production: {
        redis: {
            host: '',
            port: 6379
        }
    }
};
