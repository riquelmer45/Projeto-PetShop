const Pet = require('../model/Pets')
const Cliente = require('../model/Cliente')


module.exports = class PetController {

  static async newPet(req, res) {
    const clientes = await Cliente.findAll({
      attributes: ['id', 'nome', 'sobrenome'],
      raw: true
  })

    res.render('pets/petform', {clientes})
  }

  static async newPetSave(req, res) {
    const animal = {
      nome: req.body.nome,
      especie: req.body.especie,
      raça: req.body.raça,
      nascimento: req.body.nascimento,
      cor: req.body.cor,
      peso: req.body.peso,
      dono: req.body.dono,
    }

    await Pet.create(animal)
      .then(() => {
        this.allPets()
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/Pets/allPets')

  }
  static async home(req, res) {
    res.render('pets/home')
  }

  static async allPets(req, res) {
    const pets = await Pet.findAll({ raw: true })
    res.render('pets/viewpet', { pets })
  }

  static async updatePet(req, res) {
    const id = req.params.id
    const pet = await Pet.findOne({ where: { id: id }, raw: true })
    res.render('pets/edit', { pet })

  }

  static async updatePetSave(req, res) {
    const id = req.body.id
    const pet = {
      nome: req.body.nome,
      especie: req.body.especie,
      raça: req.body.raça,
      nascimento: req.body.nascimento,
      cor: req.body.cor,
      peso: req.body.peso,
    }
    await Pet.update(pet, { where: { id: id } })
      .then(res.redirect('/pets/allPets'))
      .catch((err) => {
        console.log(err)
      })
  }

  static async removePet(req, res) {
    const id = req.body.id
    await Pet.destroy({ where: { id: id } })
      .then(res.redirect('/pets/allPets'))
      .catch((err) => {
        console.log(err)
      })
  }
}
