const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Cliente = db.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  sobrenome: {
    type: DataTypes.STRING,
    required: true
  },
  data_nascimento: {
    type: DataTypes.STRING,
    required: true
  },
  cpf: {
    type: DataTypes.STRING,
    required: true
  }
})

module.exports = Cliente