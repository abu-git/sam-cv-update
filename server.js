const express = require('express')
const hbs = require('express-handlebars')

//the latest version removed default engine export
const { engine } = require('express-handlebars')
const path = require('path')

const app = express()

// view engine setup
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')



//Static Files
app.use(express.static(path.join(__dirname, '/public')))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server running on ' + PORT)
})

