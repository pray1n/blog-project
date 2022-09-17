//title, date_time, author_name, content_text, picture, special, category_id
const blogs = [
    {
        id: 1,
        title:"SEYCHELLEN SEHENSWÜRDIGKEITEN",
        datetime:'2022-10-09',
        author_name:'Maurice',
        content_text:"Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren.",
        picture:"https://wetraveltheworld.de/wp-content/uploads/seychellen_sehenswurdigkeiten_beau-vallon-beach_01.jpg",
        special: true,
        category_id: 1
    },
    {
        id: 2,
        title:"CITY GUIDE AUGSBURG",
        datetime:'2022-10-09',
        author_name:'Moritz',
        content_text:'Ein guter Startpunkt für unseren Stadtspaziergang durch Augsburg und zugleich eine sehr empfehlenswerte Unterkunft ist das Dom-Hotel.',
        picture:'https://wetraveltheworld.de/wp-content/uploads/2021/11/augsburg-sehenswuerdigkeiten-an-einem-tag.jpg',
        special: false,
        category_id: 2
    },
    {
        id: 3,
        title:"TALLINN IN 3 TAGEN",
        datetime:'2022-2-04',
        author_name:'Andrea',
        content_text:'Tallinn ist nicht nur die Hauptstadt Estlands, sie ist darüber hinaus auch das kulturelle Zentrum des Landes.',
        picture:'https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg',
        special: true,
        category_id: 3
    },
    {
        id: 4,
        title:"GEHEIMTIPP PLAYA RAJADITA",
        datetime:'2022-3-06',
        author_name:'Martin',
        content_text:'Alleine an den Stränden der Bahia Jobo. Das Paradies irgendwo im Niemandsland.',
        picture:'https://wetraveltheworld.de/wp-content/uploads/2013/07/IMG_2028.jpg',
        special: false,
        category_id: 2
    },
    {
        id: 5,
        title:"LOS ANGELES IN 3 TAGEN ",
        datetime:'2022-25-06',
        author_name:'Martin',
        content_text:'Los Angeles ist der wahrgewordene American Dream. Mit rund 4 Millionen Einwohnern ist sie die zweitgrößte Stadt der gesamten USA und dementsprechend vielseitig.',
        picture:'https://wetraveltheworld.de/wp-content/uploads/2019/06/los-angeles-sehenswuerdigkeiten.jpg',
        special: true,
        category_id: 1
    },
    {
        id: 6,
        title:"MARINA DI VENEZIA TIPPS",
        datetime:'2022-1-02',
        author_name:'Andrea',
        content_text:'Wenn ich an Norditalien denke, kommt mir als allererstes Venedig in den Sinn. Beziehungsweise war das bisher so. Dass es aber rundum die Lagune von Venedig so viel mehr zu entdecken gibt und sich darunter wahre Schätze verbergen, das habe ich erst jetzt gelernt.',
        picture:'https://wetraveltheworld.de/wp-content/uploads/2018/06/lagune-von-venedig-marina-di-venezia-ausfluege-tipps.jpg',
        special: false,
        category_id: 3
    },
    {
        id: 7,
        title:"HOTEL TIPP SCHWEIZ",
        datetime:'2022-5-09',
        author_name:'Maurice',
        content_text:'Mittlerweile haben wir uns so sehr in die Schweizer Berge verliebt, dass wir immer wieder gerne herkommen. Egal ob zum Wandern oder Skifahren. Im letzten Jahr waren wir bereits im Winter in Laax. Aber da hat es so geschneit, dass wir nicht mal die Berge gesehen haben. Also mussten wir nun dringend wieder im Winter nach Laax reisen. Und wir hatten Glück mit dem Wetter. Es war traumhaft.',
        picture:'https://wetraveltheworld.de/wp-content/uploads/2018/01/rider-hotel-laax-schweiz.jpg',
        special: true,
        category_id: 1
    },
]

module.exports = blogs;