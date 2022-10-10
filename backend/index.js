const express = require('express')
const cors = require('cors')
const ejs = require('ejs')
const app = express()
const bodyParser = require('body-parser')
const cookie = require('cookie-parser')
const { addUser, getUserByEmail } = require('./controllers/db_operations')


app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(cookie())
app.use(bodyParser.urlencoded({ extended: true }))

//const blogs = require('./models/blogs'); //mock objects
//const categories = require('./models/categories'); //mock objects
const {
    getBlogs,
    insertBlogPost,
    getCategories,
    getOneBlog,
} = require('./controllers/db_operations')
const { NextPlan } = require('@mui/icons-material')

//const port = process.env.PG_PORT || 8080;
const port = 8080

app.get('/useredit', (req, res) => {
    res.render('pages/useredit.ejs')
app.get('/register', (req, res) => {
    res.render('./pages/register.ejs')
})
app.post('/register', async (req, res, next) => {
    let { email, password } = req.body
    console.log(req.body)
    try {
        const exist = await getUserByEmail(email)
        console.log(exist)
        if (!exist.length > 0) {
            await addUser(email, password)
                .then(() => {
                    res.send('User saved')
                })
                .catch((e) => {
                    res.send('Error!')
                })
        } else {
            const error = 'Account exists, please try login with it.'
            res.render('./pages/login.ejs', { error })
        }
    } catch (err) {
        next(err)
    }
})

app.get('/login', (req, res) => {
    res.render('./pages/login.ejs')
})
app.post('/login', async (req, res) => {
    let { email, password } = req.body
    try {
        let foundUser = await User.findOne({ email })
    } catch (e) {
        next(e)
    }
})

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
    app.post('/blog', (req, res) => {
        insertBlogPost(req)
            .then((data) => {
                res.status(201).send(data)
            })
            .catch((err) => {
                res.status(400).send({ error: err.message })
            })
    }),
    app.listen(port, () => console.log('Server listening at ' + port))
