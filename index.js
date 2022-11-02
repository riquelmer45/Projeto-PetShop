const express = require('express')
const app = express()
const port = 4000
const exphbs = require('express-handlebars')
const petshop = require('./routes/router')
const Pet = require('./routes/petRouter')
const Cliente = require('./routes/clienteRouter')
const Funcionario = require('./routes/funcionarioRouter')
const conn = require('./db/conn')
const petModel = require('./model/Pets')
const clienteModel = require('./model/Cliente')
const funcionarioRouter = require('./model/Funcionario')

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

//configure template handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//parser para leitura do body
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())


app.use(express.static('public'))

//adicionando rota Pets
app.use('/petshop', petshop)
app.use('/pets', Pet)
//adicionando rota Cliente
app.use('/cliente', Cliente)
//adcionando a rota Funcionario
app.use('/funcionarios', Funcionario)

app.get('/', (req, res) => {
  res.render('petshop/home')
})



conn
  .sync()
  .then(() => {
    app.listen(8000)
    console.log('Server Started')
  })
  .catch((err) => {
    console.log(err)
  })