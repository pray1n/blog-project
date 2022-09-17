const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('build'));
app.use(express.json());
const blogs = require('./models/blogs');
const categories = require('./models/categories');

const port = process.env.PG_PORT || 8080;

app.get('/blogs', (req, res) => {
    res.send(blogs);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => console.log('Server listening at ' + port));