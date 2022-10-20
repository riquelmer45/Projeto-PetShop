const express = require('express')
const app = express()
const port = 4000
const exphbs = require('express-handlebars')
const Pet = require('./routes/petRouter')
const conn = require('./db/conn')
const petModel = require('./model/Pets')


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

//adicionando CSS
app.use(express.static('public'))



//adicionando rota Pets
app.use('/pets', Pet)



conn
  .sync()
  .then(() => {
    app.listen(3000)
    console.log('Server Started')
  })
  .catch((err) => {
    console.log(err)
  })