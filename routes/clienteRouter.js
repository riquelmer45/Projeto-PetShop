const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/ClienteController')

router.get('/add', ClienteController.newCliente)
router.post('/add', ClienteController.newClienteSave)
router.get('/edit/:id', ClienteController.updateViewCliente)
router.post('/edit', ClienteController.updateCliente)
router.post('/remove', ClienteController.removeCliente)
router.get('/allCliente', ClienteController.allCliente)
router.get('/allPetsByCliente/:id', ClienteController.allPetsByCliente)

module.exports = router
