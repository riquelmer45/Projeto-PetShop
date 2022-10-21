const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/ClienteController')

/* router.get('/add', ClienteController.newPet)
router.post('/add', ClienteController.newPetSave)
router.get('/edit/:id', ClienteController.updatePet)
router.post('/edit', ClienteController.updatePetSave)
router.post('/remove', ClienteController.removePet) */
router.get('/allCliente', ClienteController.allCliente)
router.get('/', ClienteController.home)

module.exports = router
