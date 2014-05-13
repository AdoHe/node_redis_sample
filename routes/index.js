var drifter = require('../controllers/drifter');

module.exports = function (server) {

    /**
     * Get one drifter
     *
     */
    server.get('/', drifter.getDrifter);

    /**
     * Throw one drifter
     *
     */
    server.post('/', drifter.throwDrifter);
}
