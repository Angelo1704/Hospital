const Sequelize = require('sequelize')
const dbConfig = require('./config/dbconfig')

const Physician = require('../models/Physician')

const connection = new Sequelize(dbConfig)

Physician.init(connection)

// Physician.associate(connection.models)

module.exports = connection
