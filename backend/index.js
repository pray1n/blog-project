
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('build'));
app.use(express.json())

const port = 8080

const blogs = [
    {title:"FIJI – URLAUB VOM URLAUB",
    content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: true,

    },
    {title:"Blogpost 2",
    date_time:"2022-10-09",
    author_name:"Maurice",
    content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.Die Lagune ist aus dem gleichnamigen Film aus den 90ern bekannt. Sobald man ins Wasser geht wird man von den verschiedensten Fischschwärmen umzingelt, weil sie hier dauernd gefüttert werden. Die Tour ist ganz nett. Lange verweilen kann man an dem Strand nicht, weil es ein Privatstrand ist. Jedoch gehört der Strand nicht zum Blue Lagoon Resort, sondern zum Turtle Island Resort.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: true
    },
    {title:"Blogpost 3",
    date_time:"2022-10-09",
    author_name:"Maurice",
    content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.Die Lagune ist aus dem gleichnamigen Film aus den 90ern bekannt. Sobald man ins Wasser geht wird man von den verschiedensten Fischschwärmen umzingelt, weil sie hier dauernd gefüttert werden. Die Tour ist ganz nett. Lange verweilen kann man an dem Strand nicht, weil es ein Privatstrand ist. Jedoch gehört der Strand nicht zum Blue Lagoon Resort, sondern zum Turtle Island Resort.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: true
    },




]

app.get('/blogs', (req, res) => {
    
    res.send(blogs)
})


app.listen(port, () => console.log('Server listening at ' + port))