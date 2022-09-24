const express = require('express')
const cors = require('cors')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
//const blogs = require('./models/blogs')
//const categories = require('./models/categories')
const db_operations = require('./controllers/db_operations')

const port = process.env.PG_PORT || 8080

app.get('/blogs', (req, res) => {
    const blogs = db_operations.getBlogs();
    res.send(blogs)
})

app.get('/categories', (req, res) => {
    //const categories = db_operations.getCategories();
    //res.send(categories)
})

app.listen(port, () => console.log('Server listening at ' + port))
