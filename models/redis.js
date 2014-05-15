var redis = require('redis'),
    env = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env],
    client = redis.createClient(config.redis.port, config.redis.host);

/**
 * Pick a bottle from the ocean
 *
 */
exports.pick = function (info, callback) {
    var type = {
        all: Math.round(Math.random()),
        male: 0,
        female: 1
    };
    info.type = info.type || 'all';

    // Select the database according to the type
    client.SELECT(type[info.type], function () {

        // Get a random key
        client.RANDOMKEY(function (err, bottleId) {
            if (!bottleId) {
                return callback({code: 0, msg: 'Empty...'});
            }

            // Get the detail bottle info with bottle id
            client.HGETALL(bottleId, function (err, bottle) {
                if (err) {
                    return callback({code: 0, msg: 'Broken...'});
                }

                // Return the result
                callback({code: 1, msg: bottle});

                // Delete the bottle from redis
                client.DEL(bottleId);
            });
        });
    });
}

/**
 * Throw a bottle to the ocean
 *
 *
 */
exports.throwBottle = function (bottle, callback) {
    var type = {
        male: 0,
        female: 1
    },
    bottleId = Math.random().toString(16);
    bottle.time = bottle.time || Date.now();

    client.select(type[bottle.type], function () {

        // Store the bottle
        client.HMSET(bottleId, bottle, function (err, result) {
            if (err) {
                return callback({code: 0, msg: 'try later...'});
            }

            callback({code: 1, msg: result});

            // Set the expire time
            client.EXPIRE(bottleId, 100000);
        });
    });
}
