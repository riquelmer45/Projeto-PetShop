const Servico = require('../model/Servico')


module.exports = class ServicoController {

  static async newServico(req, res) {
    const servicos = await Servico.findAll({})

    res.render('servicos/servicoform', {servicos})
  }

  static async newSave(req, res) {
    const servico = {
      titulo: req.body.titulo,
      srcFoto: req.body.srcFoto,
      preco: req.body.preco,
      precoPromocional: req.body.precoPromocional,
      possuiDesconto: req.body.possuiDesconto == 'true' ? true : false
    }

    await Servico.create(servico)
      .then(() => {
        this.allServicos()
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/servicos/allServicos')

  }

  static async allServicos(req, res) {
    const servs = await Servico.findAll({ raw: true })
    let servicos = []
    for(let i=0;i < servs.length;){
      let lista = []

      if(i < servs.length) lista.push(servs[i++])
      if(i < servs.length) lista.push(servs[i++])
      if(i < servs.length) lista.push(servs[i++])
      if(i < servs.length) lista.push(servs[i++])

      servicos.push(lista)
    }
    res.render('servicos/viewservico', { servicos })
  }

  static async update(req, res) {
    const id = req.params.id
    const servico = await Servico.findOne({ where: { id: id }, raw: true })
    res.render('servicos/editservico', { servico })

  }

  static async updateSave(req, res) {
    const id = req.body.id
    const servico = {
        titulo: req.body.titulo,
        srcFoto: req.body.srcFoto,
        preco: req.body.preco,
        precoPromocional: req.body.precoPromocional,
        possuiDesconto: req.body.possuiDesconto == 'true' ? true : false
    }

    await Servico.update(servico, { where: { id: id } })
      .then(res.redirect('/servicos/allServicos'))
      .catch((err) => {
        console.log(err)
      })
  }

  static async removeServico(req, res) {
    const id = req.body.id
    await Servico.destroy({ where: { id: id } })
      .then(res.redirect('/servicos/allServicos'))
      .catch((err) => {
        console.log(err)
      })
  }
}
