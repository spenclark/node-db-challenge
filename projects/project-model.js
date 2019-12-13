const db = require('../data/db-config.js')

function get() {
    return db('projects')
}

module.exports = {
    get,
}