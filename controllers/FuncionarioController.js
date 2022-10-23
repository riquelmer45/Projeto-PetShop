const Funcionario = require('../model/Funcionario')

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
            senha: req.body.senha
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
}

