const express = require('express')
const router = express.Router()
const ServicoController = require('../controllers/ServicoController')

router.get('/add', ServicoController.newServico)
router.post('/add', ServicoController.newSave)
router.get('/edit/:id', ServicoController.update)
router.post('/edit', ServicoController.updateSave)
router.post('/remove', ServicoController.removeServico)
router.get('/allServicos', ServicoController.allServicos)


module.exports = router
