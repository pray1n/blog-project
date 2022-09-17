
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('build'));
app.use(express.json())

const port = 8080

const blogs = [
    {title:"SEYCHELLEN SEHENSWÜRDIGKEITEN – 12 WUNDERVOLLE DINGE, DIE DU GESEHEN UND GEMACHT HABEN SOLLTEST",
    content_short:`Der längste und zugleich beliebteste Strand der Seychellen ist der Beau Vallon Beach. Er liegt im Nordwesten der Insel Mahé`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/seychellen_sehenswurdigkeiten_beau-vallon-beach_01.jpg",
    special: true,

    },
    {title:"	FIJI – URLAUB VOM URLAUB",
    content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: false,
    },
    {title:"CITY GUIDE AUGSBURG: 1 TAG IN DER EHEMALIGEN RÖMISCHEN PROVINZHAUPTSTADT [+HOTELS & RESTAURANTS]",
    content_short:`Ein guter Startpunkt für unseren Stadtspaziergang durch Augsburg und zugleich eine sehr empfehlenswerte Unterkunft ist das Dom-Hotel.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2013/11/IMG_4860.jpg",
    special: false,
    },
    {title:"FIJI – URLAUB VOM URLAUB 4",
    content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: false,
    },
    {title:"FIJI – URLAUB VOM URLAUB 5",
    content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: true,

    },
    {title:"FIJI – URLAUB VOM URLAUB 6",
    content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: false,

    },
    {title:"FIJI – URLAUB VOM URLAUB 7",
    content_short:`Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: true,

    }
]
const singleBlog = [
    {title:"FIJI – URLAUB VOM URLAUB",
    date_time:"2022-10-09",
    author_name:"Maurice",
    content:`Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren. Die Lagune ist aus dem gleichnamigen Film aus den 90ern bekannt. Sobald man ins Wasser geht wird man von den verschiedensten Fischschwärmen umzingelt, weil sie hier dauernd gefüttert werden. Die Tour ist ganz nett. Lange verweilen kann man an dem Strand nicht, weil es ein Privatstrand ist. Jedoch gehört der Strand nicht zum Blue Lagoon Resort, sondern zum Turtle Island Resort.`,
    tag:"Strandurlaub",
    picture:"https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg",
    special: false,

    },

]

app.get('/blogs', (req, res) => {
    
    res.send(blogs)
})
app.get('/singleBlog', (req, res) => {
    
    res.send(singleBlog)
})


app.listen(port, () => console.log('Server listening at ' + port))