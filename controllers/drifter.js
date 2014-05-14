var redis = require('../models/redis'),
    url = require('url');

/**
 * Get a drifter
 *
 */
exports.getDrifter = function (req, res) {
    var query = url.parse(req.url, true).query;

    if (!query.user) {
        return res.json({code: 0, msg: 'not complete...'});
    }

    redis.pick(query, function (result) {
        res.json(result);
    });
}

/**
 * Throw one drifter
 *
 */
exports.throwDrifter = function (req, res, next) {
}
