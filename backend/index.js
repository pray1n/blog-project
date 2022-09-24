const express = require('express');
const cors = require('cors');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('build'));
app.use(cors());
app.use(express.json());
//const blogs = require('./models/blogs'); //mock objects
//const categories = require('./models/categories'); //mock objects
const { getBlogs, insertBlogPost } = require('./controllers/db_operations');

//const port = process.env.PG_PORT || 8080;
const port = 8080;

app.get('/blogs', (req, res) => {
    //res.send(blogs); //for mock objects
    getBlogs()
    .then((data) => {res.json(data)})
    .catch((err) => {
        res.status(400).send({error: err.message})
    })
})

app.get('/categories', (req, res) => {
    res.send(categories); //for mock objects
    /* getCategories()
    .then((data) => {res.json(data)})
    .catch((err) => {
        res.status(400).send({error: err.message})
    }) */
})

app.listen(port, () => console.log('Server listening at ' + port));