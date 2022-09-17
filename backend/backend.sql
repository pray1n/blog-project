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
    'Schnorchelausflug zur blauen Lagune Für 25,-$/Person kann man vom Resort aus mit dem Boot zum schnorcheln zur blauen Lagune fahren. Die Lagune ist aus dem gleichnamigen Film aus den 90ern bekannt. Sobald man ins Wasser geht wird man von den verschiedensten Fischschwärmen umzingelt, weil sie hier dauernd gefüttert werden. Die Tour ist ganz nett. Lange verweilen kann man an dem Strand nicht, weil es ein Privatstrand ist. Jedoch gehört der Strand nicht zum Blue Lagoon Resort, sondern zum Turtle Island Resort.',
    '<img alt="seychellen" src="https://wetraveltheworld.de/wp-content/uploads/2013/11/IMG_4860.jpg" width=150" height="70">',
    true,
    1
);

INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'CITY GUIDE AUGSBURG: 1 TAG IN DER EHEMALIGEN RÖMISCHEN PROVINZHAUPTSTADT [+HOTELS & RESTAURANTS]',
    '2022-04-01',
    'Moritz',
    'Ein guter Startpunkt für unseren Stadtspaziergang durch Augsburg und zugleich eine sehr empfehlenswerte Unterkunft ist das Dom-Hotel. Eine Übersicht mit guten Hotels in Augsburg findest du wie immer am Ende meines Artikels. Du befindest dich hier bereits in der Altstadt in Sichtweite zum Dom. Südlich des Doms findest du den Fronhof mit der Bischöflichen Residenz, eine schöne und ruhige Grünanlage, die zum Verweilen einlädt – aber erst nach unserem Stadtspaziergang!',
    '<img alt="seychellen" src="https://wetraveltheworld.de/wp-content/uploads/2021/11/augsburg-sehenswuerdigkeiten-an-einem-tag.jpg" width=150" height="70">',
    false,
    2
);

INSERT into blog (title, date_time, author_name, content_text, picture, special, category_id) values
(
    'TALLINN IN 3 TAGEN: DIE 15 BESTEN DINGE, DIE DU IN TALLINN GESEHEN UND GEMACHT HABEN MUSST',
    '2022-2-04',
    'Andrea',
    'Tallinn ist nicht nur die Hauptstadt Estlands, sie ist darüber hinaus auch das kulturelle Zentrum des Landes. Die mittelalterliche Altstadt gehört zum UNESCO Weltkulturerbe. Tallinn empfängt Besucher herzlich und ist ein hervorragender Gastgeber: lebhaft, am Puls der Zeit, historisch gewachsen, alt und neu, bewegt und stark, lebensfroh, gebildet, vielseitig und wunderschön bietet Tallinn Besuchern alles, was das Herz begehrt',
    'https://wetraveltheworld.de/wp-content/uploads/2018/03/tallinn-sehenswuerdigkeiten_.jpg',
    false,
    3
);