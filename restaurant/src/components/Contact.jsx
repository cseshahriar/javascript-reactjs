import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import {LocalForm, Control, Errors} from 'react-redux-form';

// validation functions
const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
    componentDidMount() {
        document.title = "Contact Page";
    }

    handleSubmit = values => {
        console.log(values);
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        className='form-control'
                                        name="firstname"
                                        model=".firstname"
                                        placeholder="First Name"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors className="text-danger" model=".firstname" 
                                        show="touched" messages={{required: 'Required'}} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        className='form-control'
                                        name="lastname"
                                        model=".lastname"
                                        placeholder="Last Name"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors className="text-danger" model=".lastname" 
                                        show="touched" messages={{required: 'Required'}} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text
                                        className='form-control'
                                        name="telnum"
                                        model=".telnum"
                                        placeholder="Tel. Number"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors className="text-danger" model=".telnum" 
                                        show="touched" messages={{required: 'Required', isNumber: 'Number please'}} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        className='form-control'
                                        model=".email"
                                        name="email"
                                        placeholder="Email"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors className="text-danger" model=".email" 
                                        show="touched" messages={{required: 'Required', validEmail: 'Invalid email'}} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                className='form-control-check'
                                                name="agree"
                                                model=".agree"
                                            />
                                    
                                            <strong>May we contact you?
                                            </strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        className='form-control'
                                        name="contactType"
                                        model=".contactType"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        className='form-control'
                                        model=".message"
                                        name="message"
                                        rows="12"
                                        validators={{required}}
                                    />
                                     <Errors className="text-danger" model=".message" 
                                        show="touched" messages={{required: 'Required'}} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;