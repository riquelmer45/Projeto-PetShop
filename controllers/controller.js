const Funcionario = require("../model/Funcionario")
const path = require('path')
const bcrypt = require('bcrypt')
const flash = require('express-flash')

module.exports = class controller {
    static async home(req, res){
        res.render('petshop/home')
    }

    static async login(req, res){
        res.render('petshop/login')
    }

    static logout(req,res) {
        console.log('Sessao encerrada!')
        req.session.destroy()
        res.redirect('/')
    }

    static async loginSubmit(req, res){
        try {
            const { login, senha} = req.body
            const funcionario = await Funcionario.findOne({
                where: { login: login }
            })

            if(funcionario == null){
                req.flash('massage', 'Funcionario não cadastrado')
                let message = {
                    width: '260px',
                    descricao: 'Funcionario não cadastrado'
                }
                res.render('petshop/login', {message})
                return;
            }

            const validSenha = await bcrypt.compare(senha, funcionario.senha)//comentar esse trecho para caso n tenha senha incriptas

            if(!validSenha){
                req.flash('massage', 'Senha Inválida')
                let message = {
                    width: '160px',
                    descricao: 'Senha Inválida'
                }
                res.render('petshop/login', {message})
                return
            }
            req.session.userid = funcionario.id
            req.flash('massage', 'Funcionário logado com sucesso!')
            req.session.save(()=>{
                res.redirect('/')
            })
        } catch (error) {
            console.log(error)
        }      
    }
}