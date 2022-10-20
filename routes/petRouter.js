const express = require('express')
const router = express.Router()
const PetController = require('../controllers/PetController')

router.get('/add', PetController.newPet)
router.post('/add', PetController.newPetSave)
router.get('/edit/:id', PetController.updatePet)
router.post('/edit', PetController.updatePetSave)
router.post('/remove', PetController.removePet)
router.get('/allPets', PetController.allPets)
router.get('/', PetController.home)


module.exports = router
