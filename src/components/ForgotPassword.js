import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Navigation from "./Navigation";
import "./Forgotpass.css";
import forgotpassicon from '../images/forgotpassicon.jpg'
import Input from "@material-ui/core/Input";
import {Link } from "react-router-dom";

const ForgotPassword = () => {

    return(
        
        <div className="body">
            <Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login"/>
            <Container>
                <Row>
                    
                    <div className="w-50 bg-white-70 center ">
                        <h1> Forgot Password</h1> 
                        <Col lg={4} md={6} sm={12} className="mt-5 p-3">
                            <img className="pass-img mt1" src={forgotpassicon} alt="icon"/>
                            <Form>
                                <strong className=" pr3 f4">
                                    Enter Email: 
                                </strong>
                                <Input
                                    placeholder ="Email"
                                    className ="ph3 br4 pv3"
                                    type= {"email"}                                  
                                />
                                <br />
                             
                                <Link to={"/resetpassword"}>
                                    <Button 
                                        variant=" grow pa2 mv3 br-pill w-30  b" 
                                        type="submit"
                                        className ="bg-white black-90 f5 hover-bg-blue hover-white"
                                        >Continue
                                    </Button> 
                                </Link>
                                
                            </Form>
                        </Col>
                    </div>
               
                </Row>
            </Container>


        </div>
    );
} 

export default ForgotPassword;