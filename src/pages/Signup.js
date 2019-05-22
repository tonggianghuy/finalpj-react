import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Row, Col, } from 'reactstrap';
import "./Signup.css"

class Home extends Component {
    render() {
        return (
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Form className="border border-1 p-3">
                            <div className="text-center"><h1>Sign Up</h1></div>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">Address</Label>
                                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
                            </FormGroup>
                            <Button className="mt-2">Submit</Button>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="border border-1 p-3">
                            <div className="text-center"><h1>Sign In</h1></div>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                            </FormGroup>
                            <Button className="mt-2">Submit</Button>
                        </Form>
                    </Col>
                </Row>


            </Container >
        );
    }

}
export default Home;