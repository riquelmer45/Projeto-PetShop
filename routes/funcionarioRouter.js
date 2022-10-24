const express = require('express')
const { newFuncionarioSave, allFuncionario } = require('../controllers/FuncionarioController')
const router = express.Router()
const FuncionarioController = require('../controllers/FuncionarioController')

router.get('/add', FuncionarioController.newFuncionario)
router.post('/add', FuncionarioController.newFuncionarioSave)
router.get('/allFuncionario', FuncionarioController.allFuncionario)
router.get('/edit/:id', FuncionarioController.updateFuncionario)
router.post('/edit', FuncionarioController.updateFuncionarioSave)
router.post('/remove', FuncionarioController.deleteFuncionario)


module.exports = router