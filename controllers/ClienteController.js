const Cliente= require('../model/Cliente')


module.exports = class ClienteController {

  static newCliente(req, res) {
    res.render('cliente/clienteform')
  }

  static async newClienteSave(req, res) {
    const cliente = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data,
      cpf: req.body.cpf
    }

    await Cliente.create(cliente)
      .then(() => {
        this.allCliente()//carrega todos os usuários
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/cliente/allCliente')

  }
  static async home(req, res) {
    res.render('clientes/home')
  }

  static async allCliente(req, res) {
    const clientes = await Cliente.findAll({ raw: true })
    res.render('cliente/viewcliente', { clientes })
  }

  /* static async updatePet(req, res) {
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
  } */
}
