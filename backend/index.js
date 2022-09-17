const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('build'));
app.use(express.json());

const port = process.env.PORT || 8080;

const blogs = [
    {
        title:"FIJI – URLAUB VOM URLAUB 1",
        content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
        tag:"Strandurlaub",
        picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
        special: true,
    },
    {
        title:"FIJI – URLAUB VOM URLAUB 2",
        content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
        tag:"Strandurlaub",
        picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
        special: false,
    },
    {
        title:"FIJI – URLAUB VOM URLAUB 3",
        content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
        tag:"Strandurlaub",
        picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
        special: false,
    },
    {
        title:"FIJI – URLAUB VOM URLAUB 4",
        content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
        tag:"Strandurlaub",
        picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
        special: false,
    },
    {
        title:"FIJI – URLAUB VOM URLAUB 5",
        content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
        tag:"Strandurlaub",
        picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
        special: true,
    },
    {
        title:"FIJI – URLAUB VOM URLAUB 6",
        content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
        tag:"Strandurlaub",
        picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
        special: false,
    },
    {
        title:"FIJI – URLAUB VOM URLAUB 7",
        content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
        tag:"Strandurlaub",
        picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
        special: true,
    }
]

app.get('/blogs', (req, res) => {
    res.send(blogs);
})

app.listen(port, () => console.log('Server listening at ' + port));