import React, { Component } from 'react';
import { Container, Button, FormGroup, Label, Input, Row, Col, Progress } from 'reactstrap';
import { Link } from "react-router-dom";
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <Container>
                <section className="sec1 text-center">
                    <div className="pos-vertical-center">
                        <p>“Of course anyone who truly loves books buys more of them than he or she can hope to read in one fleeting lifetime. A good book, resting unopened in its slot on a shelf, full of majestic potentiality, is the most comforting sort of intellectual wallpaper.”</p>
                        <h4>~David Quammen~</h4>
                        <Button outline color="primary"><Link to="/signup">Get Book Now</Link></Button>{' '}
                    </div>
                </section>
                <hr />
                <section className="sec1 text-center">
                    <div>
                        <Row>
                            <Col sm="6" className="container">
                                <img className="container rounded" src="https://cdn.washingtoncitypaper.com/files/base/scomm/wcp/image/2019/04/960w/social_media_flyer_au_antiracist_book_festival_2019.5cc354499dabf.jpg" />
                            </Col>
                            <Col sm="6" className="container">
                                <div>
                                    <h2>American University Hosts the First Antiracist Book Festival</h2>
                                    <p>The Antiracist Book Festival will take place tomorrow at 9 a.m. at American University's Washington School of Law campus. 4300 Nebraska Avenue NW. $0-$250, all proceeds from ticket sales go toward the Antiracist Research and Policy Center at American University. </p>
                                    <Progress animated color="warning" value={75} />
                                    <div className="text-right mt-2"><Button>Buy Ticket</Button></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <hr />
                <footer className="sec1 text-center">
                    <div className="pos-vertical-center">
                        <h1>"Stay hungry, Stay foolish."</h1>
                        <h3>Steve Job</h3>
                        <h4>CEO - Apple Inc</h4>
                        <h5>Made with   ⌨️   and   🙌</h5>
                    </div>
                </footer>

            </Container>
        );
    }

}
export default Home;