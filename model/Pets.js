const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Pet = db.define('Pet', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  especie: {
    type: DataTypes.STRING,
    required: true
  }, 
  raça: {
    type: DataTypes.STRING,
    required: true
  },
  nascimento: {
    type: DataTypes.STRING,
    required: true
  },
  cor: {
    type: DataTypes.STRING,
    required: true
  },
  peso: {
    type: DataTypes.STRING,
    required: true
  },
})

module.exports = Pet