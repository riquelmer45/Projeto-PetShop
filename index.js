const express = require('express')
const app = express()
const port = 8000
const exphbs = require('express-handlebars')
const petshop = require('./routes/router')
const Pet = require('./routes/petRouter')
const Cliente = require('./routes/clienteRouter')
const Funcionario = require('./routes/funcionarioRouter')
const conn = require('./db/conn')
const flash = require('express-flash')
const session = require('express-session')
, Filestore = require('session-file-store')(session);
const petModel = require('./model/Pets')
const clienteModel = require('./model/Cliente')
const funcionarioRouter = require('./model/Funcionario')
const Cookie = require('express-session')

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

//flash massege
app.use(flash())

//configuração de session
app.use(
  session({
    nome:"session",
    secret:"secret",
    resave:false,
    saveUninitialized:false,
    store: new Filestore({
      logFn: function () { },
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 350000),
      httpOnly: true
    }

  })
)
//set session to res
app.use((req,res,next) =>{
  console.log(req.session.userid);
  if(req.session.userid) {
    res.locals.session = req.session
  }
  next();
})

//adicionando rota Pets
app.use('/petshop', petshop)
app.use('/pets', Pet)
//adicionando rota Cliente
app.use('/clientes', Cliente)
//adcionando a rota Funcionario
app.use('/funcionarios', Funcionario)

app.get('/', (req, res) => {
  res.render('petshop/home')
})



conn
  .sync()
  .then(() => {
    app.listen(port)
    console.log('Server Started')
  })
  .catch((err) => {
    console.log(err)
  })