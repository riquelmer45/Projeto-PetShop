const { Sequelize } = require('sequelize')
require('dotenv').config()

DATABASE = process.env.BD_NAME
HOST = process.env.HOST
ROOT = process.env.BD_ROOT
PASS = process.env.BD_PASS


const sequelize = new Sequelize(DATABASE, ROOT, PASS, {
  host: HOST,
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Database Connected!')
}
catch (error) {
  console.log('Não conectou', error)
}

module.exports = sequelize