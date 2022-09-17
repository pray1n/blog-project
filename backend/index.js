const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('build'))
app.use(express.json())

const port = process.env.PG_PORT || 8080
//title, date_time, author_name, content_text, picture, special, category_id
const blogs = [
    {
        title: 'SEYCHELLEN SEHENSWÜRDIGKEITEN – 12 WUNDERVOLLE DINGE, DIE DU GESEHEN UND GEMACHT HABEN SOLLTEST',
        datetime: '2022-10-09',
        author_name: 'Maurice',
        content_text:
            'Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.',
        picture:
            'https://wetraveltheworld.de/wp-content/uploads/seychellen_sehenswurdigkeiten_beau-vallon-beach_01.jpg',
        special: true,
        category_id: 1,
    },
    {
        title: 'FIJI – URLAUB VOM URLAUB 4',
        datetime: '2022-10-09',
        author_name: 'Maurice',
        content_text: `Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
        picture:
            'https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg',
        special: false,
        category_id: 2,
    },
]

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.listen(port, () => console.log('Server listening at ' + port))
