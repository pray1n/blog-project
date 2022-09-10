
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('build'));
app.use(express.json())

const port = 8080




app.listen(port, () => console.log('Server listening at ' + port))