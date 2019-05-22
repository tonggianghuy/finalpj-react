import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { CartContext } from "../contexts/Cart"

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            databooks: [{
                "id": 1,
                "bookname": "Keylex",
                "author": "Eamia",
                "description": "nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 76,
                "Categories": "CPR Certified"
            }, {
                "id": 2,
                "bookname": "Fix San",
                "author": "Gigashots",
                "description": "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 28,
                "Categories": "iPhone Application Development"
            }, {
                "id": 3,
                "bookname": "Flowdesk",
                "author": "Oyope",
                "description": "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 79,
                "Categories": "NGL"
            }, {
                "id": 4,
                "bookname": "Ventosanzap",
                "author": "Youopia",
                "description": "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 84,
                "Categories": "Google Analytics"
            }, {
                "id": 5,
                "bookname": "Gembucket",
                "author": "Centidel",
                "description": "congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 65,
                "Categories": "PgSQL"
            }, {
                "id": 6,
                "bookname": "Treeflex",
                "author": "Oozz",
                "description": "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 7,
                "Categories": "OOS"
            }, {
                "id": 7,
                "bookname": "Trippledex",
                "author": "Zoomcast",
                "description": "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 68,
                "Categories": "UCS"
            }, {
                "id": 8,
                "bookname": "Holdlamis",
                "author": "Flashdog",
                "description": "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 63,
                "Categories": "JTIDS"
            }, {
                "id": 9,
                "bookname": "Biodex",
                "author": "Oozz",
                "description": "euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 57,
                "Categories": "Agribusiness"
            }, {
                "id": 10,
                "bookname": "Bitwolf",
                "author": "Flashset",
                "description": "varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 78,
                "Categories": "Administrative Law"
            }, {
                "id": 11,
                "bookname": "Alphazap",
                "author": "Feedmix",
                "description": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 100,
                "Categories": "First Time Home Buyers"
            }, {
                "id": 12,
                "bookname": "Ronstring",
                "author": "Kazu",
                "description": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 23,
                "Categories": "MPages"
            }, {
                "id": 13,
                "bookname": "Opela",
                "author": "Trupe",
                "description": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 10,
                "Categories": "Android"
            }, {
                "id": 14,
                "bookname": "Y-Solowarm",
                "author": "Trilia",
                "description": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 16,
                "Categories": "DST"
            }, {
                "id": 15,
                "bookname": "Bitchip",
                "author": "Yacero",
                "description": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 18,
                "Categories": "JES2"
            }, {
                "id": 16,
                "bookname": "Keylex",
                "author": "Youopia",
                "description": "suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 39,
                "Categories": "Multi-channel Retail"
            }, {
                "id": 17,
                "bookname": "It",
                "author": "Dabfeed",
                "description": "ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 82,
                "Categories": "EU Law"
            }, {
                "id": 18,
                "bookname": "Tres-Zap",
                "author": "Trilith",
                "description": "phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 15,
                "Categories": "Health Promotion"
            }, {
                "id": 19,
                "bookname": "Zathin",
                "author": "BlogXS",
                "description": "est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 46,
                "Categories": "Psychodynamic Psychotherapy"
            }, {
                "id": 20,
                "bookname": "Bitwolf",
                "author": "Lazz",
                "description": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 66,
                "Categories": "MPI"
            }, {
                "id": 21,
                "bookname": "Zamit",
                "author": "Rooxo",
                "description": "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 87,
                "Categories": "e-QIP"
            }, {
                "id": 22,
                "bookname": "Namfix",
                "author": "Twitterworks",
                "description": "luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 83,
                "Categories": "Business Process"
            }, {
                "id": 23,
                "bookname": "Viva",
                "author": "Voonyx",
                "description": "pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 16,
                "Categories": "TS"
            }, {
                "id": 24,
                "bookname": "Opela",
                "author": "Lazz",
                "description": "morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 76,
                "Categories": "Career Counseling"
            }, {
                "id": 25,
                "bookname": "Ventosanzap",
                "author": "Feedmix",
                "description": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 42,
                "Categories": "Emergency Nursing"
            }, {
                "id": 26,
                "bookname": "Overhold",
                "author": "Babbleopia",
                "description": "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 82,
                "Categories": "MSP430"
            }, {
                "id": 27,
                "bookname": "Cardify",
                "author": "Avamm",
                "description": "vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 81,
                "Categories": "Time Series Analysis"
            }, {
                "id": 28,
                "bookname": "Latlux",
                "author": "Vinder",
                "description": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 13,
                "Categories": "DC-10"
            }, {
                "id": 29,
                "bookname": "Job",
                "author": "Mybuzz",
                "description": "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 15,
                "Categories": "Claims Handling"
            }, {
                "id": 30,
                "bookname": "Stronghold",
                "author": "Thoughtbeat",
                "description": "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 79,
                "Categories": "VSEO"
            }, {
                "id": 31,
                "bookname": "Stim",
                "author": "Twinder",
                "description": "sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 74,
                "Categories": "MTOs"
            }, {
                "id": 32,
                "bookname": "Matsoft",
                "author": "Livetube",
                "description": "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 28,
                "Categories": "BMP"
            }, {
                "id": 33,
                "bookname": "Fixflex",
                "author": "Topicblab",
                "description": "vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 95,
                "Categories": "PQQ"
            }, {
                "id": 34,
                "bookname": "Alpha",
                "author": "Wordpedia",
                "description": "quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 64,
                "Categories": "RSoft"
            }, {
                "id": 35,
                "bookname": "Bytecard",
                "author": "Ozu",
                "description": "quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 66,
                "Categories": "EP"
            }, {
                "id": 36,
                "bookname": "Quo Lux",
                "author": "Blogtags",
                "description": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 35,
                "Categories": "Swift"
            }, {
                "id": 37,
                "bookname": "Alphazap",
                "author": "Snaptags",
                "description": "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 46,
                "Categories": "Secretarial Skills"
            }, {
                "id": 38,
                "bookname": "Opela",
                "author": "Devpoint",
                "description": "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 34,
                "Categories": "DVD Replication"
            }, {
                "id": 39,
                "bookname": "Stim",
                "author": "Yombu",
                "description": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 87,
                "Categories": "CVM"
            }, {
                "id": 40,
                "bookname": "Subin",
                "author": "Thoughtbeat",
                "description": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 80,
                "Categories": "Food"
            }, {
                "id": 41,
                "bookname": "Lotstring",
                "author": "Kwideo",
                "description": "at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 42,
                "Categories": "HP-UX"
            }, {
                "id": 42,
                "bookname": "Tres-Zap",
                "author": "Jaxspan",
                "description": "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 35,
                "Categories": "Environmental Impact Assessment"
            }, {
                "id": 43,
                "bookname": "Cardify",
                "author": "Eayo",
                "description": "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 11,
                "Categories": "Automobile"
            }, {
                "id": 44,
                "bookname": "Pannier",
                "author": "Tagfeed",
                "description": "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 9,
                "Categories": "Legislative Affairs"
            }, {
                "id": 45,
                "bookname": "Fix San",
                "author": "Twitterbridge",
                "description": "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 7,
                "Categories": "TCA"
            }, {
                "id": 46,
                "bookname": "Alpha",
                "author": "Youspan",
                "description": "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 83,
                "Categories": "LTSpice"
            }, {
                "id": 47,
                "bookname": "Duobam",
                "author": "Linkbridge",
                "description": "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 73,
                "Categories": "Framing"
            }, {
                "id": 48,
                "bookname": "Temp",
                "author": "Tagchat",
                "description": "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 59,
                "Categories": "PV Design"
            }, {
                "id": 49,
                "bookname": "Namfix",
                "author": "Tagtune",
                "description": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 60,
                "Categories": "AMSI"
            }, {
                "id": 50,
                "bookname": "Temp",
                "author": "Twitternation",
                "description": "nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 58,
                "Categories": "Organizational Behavior"
            }, {
                "id": 51,
                "bookname": "Konklux",
                "author": "Dynava",
                "description": "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 40,
                "Categories": "WFA"
            }, {
                "id": 52,
                "bookname": "Flowdesk",
                "author": "Skalith",
                "description": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 30,
                "Categories": "Young Adults"
            }, {
                "id": 53,
                "bookname": "Zamit",
                "author": "Trilia",
                "description": "diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 75,
                "Categories": "NFS"
            }, {
                "id": 54,
                "bookname": "Viva",
                "author": "Oyondu",
                "description": "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 69,
                "Categories": "JSON"
            }, {
                "id": 55,
                "bookname": "Bamity",
                "author": "Oyondu",
                "description": "fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 34,
                "Categories": "Governmental Affairs"
            }, {
                "id": 56,
                "bookname": "Veribet",
                "author": "Skipstorm",
                "description": "augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 57,
                "Categories": "Marketing Strategy"
            }, {
                "id": 57,
                "bookname": "Bitchip",
                "author": "Twiyo",
                "description": "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 89,
                "Categories": "PyQt"
            }, {
                "id": 58,
                "bookname": "Stronghold",
                "author": "Riffpath",
                "description": "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 49,
                "Categories": "EASA"
            }, {
                "id": 59,
                "bookname": "Matsoft",
                "author": "Innojam",
                "description": "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 68,
                "Categories": "MPages"
            }, {
                "id": 60,
                "bookname": "Zoolab",
                "author": "Photobug",
                "description": "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 93,
                "Categories": "LSAT"
            }, {
                "id": 61,
                "bookname": "Stronghold",
                "author": "Skyvu",
                "description": "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 89,
                "Categories": "Working Capital Management"
            }, {
                "id": 62,
                "bookname": "Wrapsafe",
                "author": "Yozio",
                "description": "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 10,
                "Categories": "AAC"
            }, {
                "id": 63,
                "bookname": "Duobam",
                "author": "Rhynoodle",
                "description": "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 66,
                "Categories": "Dtrace"
            }, {
                "id": 64,
                "bookname": "Overhold",
                "author": "Skajo",
                "description": "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 36,
                "Categories": "FBD"
            }, {
                "id": 65,
                "bookname": "Zamit",
                "author": "Oyope",
                "description": "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 30,
                "Categories": "CPG Industry"
            }, {
                "id": 66,
                "bookname": "Toughjoyfax",
                "author": "Twiyo",
                "description": "in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 36,
                "Categories": "International Tax"
            }, {
                "id": 67,
                "bookname": "Job",
                "author": "Quinu",
                "description": "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 21,
                "Categories": "Counseling Psychology"
            }, {
                "id": 68,
                "bookname": "Biodex",
                "author": "Yambee",
                "description": "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 66,
                "Categories": "Computer Games"
            }, {
                "id": 69,
                "bookname": "Domainer",
                "author": "Zoomlounge",
                "description": "vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 49,
                "Categories": "Food Preparation"
            }, {
                "id": 70,
                "bookname": "Prodder",
                "author": "Edgeblab",
                "description": "dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 64,
                "Categories": "Appeals"
            }, {
                "id": 71,
                "bookname": "Treeflex",
                "author": "Zoomcast",
                "description": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 73,
                "Categories": "Zoo"
            }, {
                "id": 72,
                "bookname": "Stronghold",
                "author": "Kanoodle",
                "description": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 56,
                "Categories": "Ghostwriting"
            }, {
                "id": 73,
                "bookname": "Zamit",
                "author": "Shuffledrive",
                "description": "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 46,
                "Categories": "CCNP"
            }, {
                "id": 74,
                "bookname": "Span",
                "author": "Twiyo",
                "description": "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 94,
                "Categories": "QSIG"
            }, {
                "id": 75,
                "bookname": "Stringtough",
                "author": "Yakijo",
                "description": "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 99,
                "Categories": "Oil &amp; Gas Services"
            }, {
                "id": 76,
                "bookname": "Overhold",
                "author": "Reallinks",
                "description": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 55,
                "Categories": "DNA Repair"
            }, {
                "id": 77,
                "bookname": "Ronstring",
                "author": "Podcat",
                "description": "aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 52,
                "Categories": "SAP SRM"
            }, {
                "id": 78,
                "bookname": "Domainer",
                "author": "Topiczoom",
                "description": "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 82,
                "Categories": "iPhoto"
            }, {
                "id": 79,
                "bookname": "Prodder",
                "author": "Jayo",
                "description": "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 85,
                "Categories": "Job Analysis"
            }, {
                "id": 80,
                "bookname": "Zoolab",
                "author": "Thoughtbeat",
                "description": "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 49,
                "Categories": "Team Effectiveness"
            }, {
                "id": 81,
                "bookname": "Lotstring",
                "author": "Shuffledrive",
                "description": "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 15,
                "Categories": "Scientific Writing"
            }, {
                "id": 82,
                "bookname": "Andalax",
                "author": "Kamba",
                "description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 17,
                "Categories": "YUI"
            }, {
                "id": 83,
                "bookname": "Quo Lux",
                "author": "Photofeed",
                "description": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 44,
                "Categories": "SLC500"
            }, {
                "id": 84,
                "bookname": "Opela",
                "author": "Kimia",
                "description": "magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 12,
                "Categories": "Silverlight"
            }, {
                "id": 85,
                "bookname": "Trippledex",
                "author": "Gigashots",
                "description": "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 22,
                "Categories": "Non-Conforming"
            }, {
                "id": 86,
                "bookname": "Flexidy",
                "author": "Edgeblab",
                "description": "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 25,
                "Categories": "Gigabit Ethernet"
            }, {
                "id": 87,
                "bookname": "Regrant",
                "author": "Edgeify",
                "description": "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 55,
                "Categories": "MGCP"
            }, {
                "id": 88,
                "bookname": "Cardguard",
                "author": "Ozu",
                "description": "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 52,
                "Categories": "Zoology"
            }, {
                "id": 89,
                "bookname": "Alphazap",
                "author": "Trunyx",
                "description": "et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 46,
                "Categories": "RCDD"
            }, {
                "id": 90,
                "bookname": "Hatity",
                "author": "Tagfeed",
                "description": "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 12,
                "Categories": "Federal Government"
            }, {
                "id": 91,
                "bookname": "Konklab",
                "author": "Blogtag",
                "description": "sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "buy": 88,
                "Categories": "Cleaning Validation"
            }, {
                "id": 92,
                "bookname": "Treeflex",
                "author": "Einti",
                "description": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 31,
                "Categories": "Wireless"
            }, {
                "id": 93,
                "bookname": "Alpha",
                "author": "Quinu",
                "description": "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 78,
                "Categories": "Hazardous Materials"
            }, {
                "id": 94,
                "bookname": "Ventosanzap",
                "author": "Skippad",
                "description": "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 75,
                "Categories": "Lyricist"
            }, {
                "id": 95,
                "bookname": "Stim",
                "author": "Linktype",
                "description": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 80,
                "Categories": "Americans with Disabilities Act"
            }, {
                "id": 96,
                "bookname": "Latlux",
                "author": "Miboo",
                "description": "consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 29,
                "Categories": "EPR"
            }, {
                "id": 97,
                "bookname": "Daltfresh",
                "author": "Trilia",
                "description": "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 86,
                "Categories": "NHPA"
            }, {
                "id": 98,
                "bookname": "Bamity",
                "author": "Dynazzy",
                "description": "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                "buy": 93,
                "Categories": "Fire Alarm"
            }, {
                "id": 99,
                "bookname": "Zoolab",
                "author": "Yamia",
                "description": "amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "buy": 64,
                "Categories": "Data Collection"
            }, {
                "id": 100,
                "bookname": "Stringtough",
                "author": "Quimba",
                "description": "nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "buy": 38,
                "Categories": "LAN-WAN"
            }]
        }
    }
    render() {
        const { databooks } = this.state;
        return (
            <Container>
                <h2>books</h2>
                <Row>
                    <Col sm="3">
                        <h1></h1>
                    </Col>
                    <Col sm="9">
                        <Row>
                            {databooks.map(book => (
                                <Col sm="4">
                                    <Card>
                                        <CardImg
                                            top
                                            width="100%"
                                            src={book.imageUrl} />
                                        <CardBody>
                                            <CardTitle>{book.name}</CardTitle>
                                            <CardSubtitle>{book.author}</CardSubtitle>
                                            <CardText>{book.description}</CardText>
                                            <Button>Rent</Button>
                                            <CartContext.Consumer>
                                                {({ addToCart }) => <Button onClick={() => addToCart(book)}>Buy: {book.Buy}$</Button>}
                                            </CartContext.Consumer>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>

        )


    }
}
export default Books;