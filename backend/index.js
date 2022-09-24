const express = require('express')
const cors = require('cors')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
//const blogs = require('./models/blogs'); //mock objects
//const categories = require('./models/categories'); //mock objects
const {
    getBlogs,
    insertBlogPost,
    getCategories,
    getOneBlog,
} = require('./controllers/db_operations')

//const port = process.env.PG_PORT || 8080;
const port = 8080

app.get('/blogs', (req, res) => {
    //res.send(blogs); //for mock objects
    getBlogs()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).send({ error: err.message })
        })
})
app.get('/blogs/:id', (req, res) => {
    const { id } = req.params
    getOneBlog(id)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).send({ error: err.message })
        })
}),
    app.get('/categories', (req, res) => {
        getCategories()
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.status(400).send({ error: err.message })
            })
    }),
    app.listen(port, () => console.log('Server listening at ' + port))
