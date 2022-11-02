const { Datatypes, DataTypes } = require('sequelize')
const db = require('../db/conn')

const Funcionario = db.define('Funcionario', {
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
    },
    funcao: {
        type: DataTypes.STRING,
        required: true
    },
    login: {
        type: DataTypes.STRING,
        required: true
    },
    senha: {
        type: DataTypes.STRING,
        required: true
    }
})
    
module.exports = Funcionario
