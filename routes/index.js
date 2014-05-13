var drifter = require('../controllers/drifter');

module.exports = function (app) {

    /**
     * Get one drifter
     *
     */
    app.get('/', drifter.getDrifter)
}
