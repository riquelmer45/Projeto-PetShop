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

    static async loginSubmit(req, res){
        try {
            const { login, senha} = req.body
            const funcionario = await Funcionario.findOne({
                where: { login: login }
            })  
            if(!funcionario){
                req.flash('massage', 'Funcionario não cadastrado')
                res.render('funcionarios/funcionarioform')
            }
            if(!senha === Funcionario.senha){
                req.flash('massage', 'Senha Inválida')
                res.render('funcionario/funcionarioform')
                return
            }
            req.session.funcionarioid = Funcionario.id
            req.flash('massage', 'Funcionario logado com sucesso!')
            req.session.save(()=>{
                res.redirect('/')
            })
            console.log('sessao inicada')
        } catch (error) {
            console.log(error)
        }      
    }
    static logout(req,res) {
        req.session.destroy()
        res.redirect('/')
    }

}