const express = require('express')
const { newFuncionarioSave, allFuncionario } = require('../controllers/FuncionarioController')
const router = express.Router()
const FuncionarioController = require('../controllers/FuncionarioController')

router.get('/add', FuncionarioController.newFuncionario)
router.post('/add', FuncionarioController.newFuncionarioSave)
router.get('/allFuncionario', FuncionarioController.allFuncionario)


module.exports = router