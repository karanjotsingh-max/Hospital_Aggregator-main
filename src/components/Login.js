import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from '../images/user.svg'
import Input from "@material-ui/core/Input";
import Navigation from "./Navigation";
import {Link } from "react-router-dom";
import './Login.css';
import { Component } from 'react';
import axios from "axios";


class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
        const endpoint = "http://localhost:8010/api/test/admin/signin";
    
        const username = this.state.username;
        const password = this.state.password;
        
        const user_object = {
          username: username,
          password: password
        };
    
        axios.post(endpoint, user_object).then(res => {
            this.props.history.push("/admin");
            console.log(res.data)
          
        }).catch(() => {
            alert("Invalid Credentials")
        });
        
      };
    
    

    handleChange (event) {
        this.setState(
            {
            [event.target.name] 
                : event.target.value 
            }
        );
    };

    render() {
        return(
            <div>
                <Navigation Tabchange="Hospital Register" url="/hospitalregister" />
                <Container className="mt-5">
                    <Row>
                        
                        <div className="w-50 bg-white-70 center br4">
                            <h1> Admin Sign in</h1> 
                            <Col lg={4} md={6} sm={12} className="mt-5 p-3">
                                <img className="icon-img mt1" src={loginIcon} alt="icon"/>
                                <Form >
                                    <Input
                                        placeholder ="Username"
                                        className ="ph3 br4 pv3"
                                        type= {"text"}
                                        name="username"
                                        value={this.state.username}
                                        onChange = {this.handleChange}
                           
                                    
                                    />
                                    <br />
                                
                                    <Input
                                        placeholder ="Password"
                                        className ="ph3 br4 pv3"
                                        type={"password"}
                                        name="password"
                                        value={this.state.password}
                                        onChange = {this.handleChange}
                                  
                                    
                                    />
                                    <br />
                                    
                                   
                              
                                    <h4 className="mt3 grow ">Forgot Password? <Link className="dim link" to={"/forgotpassword"}>Click Here</Link></h4>
                                    <h4 className="mt3 grow ">Admin Signup? <Link className="dim link" to={"/userregister"}>Sign up</Link></h4>
                                    
                                
                                    
                                    <Button 
                                        variant="pa2 mv3 br-pill w-30 b" 
                                        className ="backy f5 grow"
                                        type="submit"
                                        onClick = {this.handleFormSubmit}
                                    >Sign in</Button>
                                
                              
                                
                            
                                </Form>
                            </Col>
                        </div>
                        
                    </Row>
                </Container>
                
            </div>

        );
    }
}

export default Login;
