const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Servico = db.define('Servico', {
  titulo: {
    type: DataTypes.STRING,
    required: true
  },
  srcFoto: {
    type: DataTypes.STRING,
    required: true
  },
  preco: {
    type: DataTypes.FLOAT,
    required: true
  }, 
  precoPromocional: {
    type: DataTypes.FLOAT,
    required: true
  },
  possuiDesconto: {
    type: DataTypes.BOOLEAN,
    required: true
  },
  nota: {
    type: DataTypes.FLOAT,
    required: false
  }
})

module.exports = Servico