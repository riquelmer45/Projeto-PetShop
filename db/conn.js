const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('petshop', 'root', '12345678', {
  host: 'localhost',
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