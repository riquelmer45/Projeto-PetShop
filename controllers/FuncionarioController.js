const Funcionario = require('../model/Funcionario')
const bcrypt = require('bcrypt')

module.exports = class FuncionarioController {
    static newFuncionario(req, res) {
        res.render('funcionarios/funcionarioform')
    }

    static async newFuncionarioSave(req, res) {
        const funcionario = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            data_nascimento: req.body.dataNascimento,
            cpf: req.body.cpf,
            funcao: req.body.funcao,
            login: req.body.login,
            senha: bcrypt.hashSync(req.body.senha, 10) 
        }

        await Funcionario.create(funcionario)
            .then(() => {
                this.allFuncionario()
            }).catch((error) => {
                console.log(error)
            })
        res.redirect('/funcionarios/allFuncionario')    
    }
    
    static async allFuncionario(req, res) {
        const funcionarios = await Funcionario.findAll({ raw: true })
        res.render('funcionarios/viewfuncionario', { funcionarios })
    }

    static async updateFuncionario(req, res) {
        const id = req.params.id
        const funcionario = await Funcionario.findOne({ where: { id: id }, raw: true })
        res.render('funcionarios/editFuncionarios', { funcionario })
    }

    static async updateFuncionarioSave(req, res) {
        const id = req.body.id
        const funcionario = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            data_nascimento: req.body.dataNascimento,
            cpf: req.body.cpf,
            funcao: req.body.funcao,
            login: req.body.login,
            senha: bcrypt.hashSync(req.body.senha, 10) 
        }
        await Funcionario.update(funcionario, { where: { id: id} })
            .then(res.redirect('/funcionarios/allFuncionario'))
            .catch((err) => {
                console.log(err)
            })
    }

    static async deleteFuncionario(req, res) {
        const id = req.body.id
        await Funcionario.destroy({ where: { id: id} })
            .then(res.redirect('/funcionarios/allFuncionario'))
            .catch((err) => {
                console.log(err)
            })
    }
}

