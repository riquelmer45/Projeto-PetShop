const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/ClienteController')

router.get('/add', ClienteController.newCliente)
router.post('/add', ClienteController.newClienteSave)
//router.get('/edit/:id', ClienteController.updatePet)
//router.post('/edit', ClienteController.updatePetSave)
//router.post('/remove', ClienteController.removePet)
router.get('/allCliente', ClienteController.allCliente)

module.exports = router
