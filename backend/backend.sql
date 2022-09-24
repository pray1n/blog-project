create table category(
    id serial primary key,
    name varchar(50)
)

create table blog (
    id serial primary key,
    title varchar(100),
    date_time varchar(50),
    author_name varchar(50),
    content_text text,
    picture varchar(255),
    special boolean,
    category_id integer
);

select * from category;

select * from blog;
drop table blog;

INSERT into category (name) values ('All-Inclusive');
INSERT into category (name) values ('Beach holiday');
INSERT into category (name) values ('City tours');

INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'FIJI – URLAUB VOM URLAUB',
    '2022-10-09', 
    'Maurice',
    'Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren. 
    Die Lagune ist aus dem gleichnamigen Film aus den 90ern bekannt. Sobald man ins Wasser geht wird man von den verschiedensten Fischschwärmen 
    umzingelt, weil sie hier dauernd gefüttert werden. Die Tour ist ganz nett. Lange verweilen kann man an dem Strand nicht, weil es ein Privatstrand ist. 
    Jedoch gehört der Strand nicht zum Blue Lagoon Resort, sondern zum Turtle Island Resort.',
    'https://wetraveltheworld.de/wp-content/uploads/2013/11/IMG_4860.jpg',
    true,
    1
);

INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'SEYCHELLEN SEHENSWÜRDIGKEITEN',
    '2022-10-09',
    'Maurice',
    'Der längste und zugleich beliebteste Strand der Seychellen ist der Beau Vallon Beach. Er liegt im Nordwesten der Insel Mahé und ist von der 
    Hauptstadt Victoria aus innerhalb von nur 15 Minuten mit dem Bus oder Auto erreichbar. Du kannst aber auch in einer der Unterkünfte in der 
    Nähe des Strandes übernachten und bequem zu Fuß dorthin gelangen. Wir waren zum Beispiel im Sunset Bay Appartement mit tollem Blick über 
    die Bucht und unglaublich netten Gastgebern. Der fast zwei Kilometer lange Beau Vallon Beach ist eine der bekanntesten Seychellen Sehenswürdigkeiten 
    und hat alles was du für einen unvergesslichen Tag am Meer brauchst. Du kannst ausgiebige Spaziergänge unternehmen oder gemütliche Stunden beim 
    Sonnenbaden im weißen Sand verbringen. Um der Sonne kurzzeitig zu entfliehen, findest du ruhige Schattenplätze unter Palmen oder kannst dir einen 
    kühlen Drink in einer der umliegenden Bars gönnen.',
    'https://wetraveltheworld.de/wp-content/uploads/seychellen_sehenswurdigkeiten_beau-vallon-beach_01.jpg',
    true,
    1
);

INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'CITY GUIDE AUGSBURG',
    '2022-10-09',
    'Maurice',
    'Heute beende ich meine Reihe der 10 schönsten Städte Deutschlands und zeige dir wieder eine wunderschöne, alte, historisch bedeutsame und touristisch 
    in der ersten Liga spielende Stadt (ebenso wie der FCA): Augsburg! Vielleicht wunderst du dich als aufmerksamer Leser: Nach Lübeck, Magdeburg, Görlitz, 
    Trier, Mainz, Bamberg, Landshut und Regensburg ist das doch erst die neunte Städtetour in dieser Reihe, da fehlt doch eine? Ja – richtig gezählt, 
    aber falsch gedacht: Die zehnte sehenswerte Stadt darfst du hinzufügen, nach eigener Wahl! Dann ist das auch deine Liste, die du teilen und bewerben kannst! 
    Teile uns deine persönliche Wahl der schönsten Stadt Deutschlands unten in den Kommentaren mit – wir sind gespannt!',
    'https://wetraveltheworld.de/wp-content/uploads/2021/11/augsburg-sehenswuerdigkeiten-an-einem-tag.jpg',
    false,
    2
);

INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'TALLINN IN 3 TAGEN',
    '2022-2-04',
    'Andrea',
    'Tallinn ist nicht nur die Hauptstadt Estlands, sie ist darüber hinaus auch das kulturelle Zentrum des Landes. Die mittelalterliche Altstadt gehört zum 
    UNESCO Weltkulturerbe. Tallinn empfängt Besucher herzlich und ist ein hervorragender Gastgeber: lebhaft, am Puls der Zeit, historisch gewachsen, alt und 
    neu, bewegt und stark, lebensfroh, gebildet, vielseitig und wunderschön bietet Tallinn Besuchern alles, was das Herz begehrt. Wir haben Tallinn im Zuge 
    unseres 11 tägigen Estland Roadtrips besucht und waren wirklich begeistert. Und wir möchten dir unbedingt ans Herz legen nicht nur die besten Tallinn 
    Sehenswürdigkeiten und Highlights zu besuchen, sondern das ganze Land zu bereisen. Du wirst von Estland wirklich begeistert sein! Unsere persönlichen 
    Tallinn Highlights stellen wir dir in diesem Artikel vor. Dabei findest du sowohl klassische Sehenswürdigkeiten als auch ein paar alternative Tipps für 
    deinen Tallinn Urlaub. Am Ende findest du eine Übersicht mit Restaurants, Hotel Tipps und Touren in und um Tallinn.',
    'https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg',
    true,
    3
);
INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'GEHEIMTIPP PLAYA RAJADITA',
    '2022-3-06',
    'Martin',
    'Seit dem 05.07.13 sind wir nun an diesem verschlafenen und recht unerschloßenen Fleckchen Erde im Blue Dream Hotel zwischen La Cruz und El Jobo. 
    Das Hotel wird von einem Italiener namens Nicola seit einigen Jahren betrieben. Er betreibt hier außerdem eine Kitesurfing Schule. Weil wir in der 
    Nebensaison angereist sind, hatten wir freie Auswahl der Zimmer und so entschieden wir uns für ein herrliches Holzbungalow mit Blick über die Bucht 
    Bahia Salina und das Vogelreservat Isla Bolanos. Nach einer anstrengenden 4 1/2 stündigen Busfahrt (davon 2 1/2 Stunden stehend) von Monteverde nach 
    La Cruz sind wir mittags im Blue Dream Hotel angekommen, richteten uns ein und schauten uns erstmal den nahegelegenen Strand an. Dieser ist nicht 
    sehr windgeschützt und optimal zum Kitesurfen. Weil wir aber nur entspannen und nicht surfen wollten, gab',
    'https://wetraveltheworld.de/wp-content/uploads/2013/07/IMG_2028.jpg',
    false,
    2
);
INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'LOS ANGELES IN 3 TAGEN',
    '2022-25-06',
    'Martin',
    'Los Angeles ist der wahrgewordene American Dream. Mit rund 4 Millionen Einwohnern ist sie die zweitgrößte Stadt der gesamten USA und dementsprechend 
    vielseitig. Wir stellen dir heute die besten Los Angeles Highlights vor, die du innerhalb von drei Tagen in der Metropole besichtigen kannst. Dabei geht 
    es in verschiedene Viertel, vom schicken Designerviertel des Rodeo Drives bis hin in die Natur der Santa Monica Mountains. Außerdem geben wir dir Tipps 
    für Restaurants, Veranstaltungen und Verkehrsmittel – damit sollte deinem Los Angeles Trip nichts mehr im Wege steht!',
    'https://wetraveltheworld.de/wp-content/uploads/2019/06/los-angeles-sehenswuerdigkeiten.jpg',
    true,
    1
);
INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'MARINA DI VENEZIA TIPPS',
    '2022-1-02',
    'Andrea',
    'Wenn ich an Norditalien denke, kommt mir als allererstes Venedig in den Sinn. Beziehungsweise war das bisher so. Dass es aber rundum die Lagune von 
    Venedig so viel mehr zu entdecken gibt und sich darunter wahre Schätze verbergen, das habe ich erst jetzt gelernt. Klar, Venedig ist jedem ein Begriff 
    und für viele auch ein Traumziel. Warum es sich definitiv lohnt, ein paar mehr Tage in der Region einzuplanen und warum der Campingplatz Marina di 
    Venezia der perfekte Ausgangspunkt dafür ist, erfährst du in diesem Artikel.',
    'https://wetraveltheworld.de/wp-content/uploads/2018/06/lagune-von-venedig-marina-di-venezia-ausfluege-tipps.jpg',
    false,
    3
);
INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'HOTEL TIPP SCHWEIZ',
    '2022-5-09',
    'Maurice',
    'Mittlerweile haben wir uns so sehr in die Schweizer Berge verliebt, dass wir immer wieder gerne herkommen. Egal ob zum Wandern oder Skifahren. 
    Im letzten Jahr waren wir bereits im Winter in Laax. Aber da hat es so geschneit, dass wir nicht mal die Berge gesehen haben. Also mussten wir nun 
    dringend wieder im Winter nach Laax reisen. Und wir hatten Glück mit dem Wetter. Es war traumhaft. Letztes mal kamen wir im Hotel Peaks Place unter. 
    Diesmal testeten wir das ganz neu renovierte Riders Hotel, vorher Riders Palace genannt. Im folgenden Artikel beschreiben wir dir unsere Riders Hotel 
    Erfahrungen und was du sonst soin Laax machen solltest.',
    'https://wetraveltheworld.de/wp-content/uploads/2018/01/rider-hotel-laax-schweiz.jpg',
    true,
    1
);