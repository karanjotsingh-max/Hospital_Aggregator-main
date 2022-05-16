import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Navigation from "./Navigation";
import "./Forgotpass.css";
import resetpassicon from '../images/resetpassicon.jpg';
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [values, setValues] = React.useState(
        {
            password: "",
            confirm_password: "",            
            showPassword: false,
        }
    );

    const handleClickShowPassword = () => {
        setValues(
            { 
                ...values, showPassword: !values.showPassword 
            }
        );
      };
      
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues(
            {
             ...values, [prop]: event.target.value 
            }
        );
    };
    return(
        
        
        <div className="body">
            <Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login"/>
            <Container>
                <Row>
                    
                    <div className="w-50 bg-white-70 center ">
                        <h1> Reset Password</h1> 
                        <Col lg={4} md={6} sm={12} className="mt-5 p-3">
                            <img className="pass-img mt1" src={resetpassicon} alt="icon"/>
                            <Form>
                            <Input
                                placeholder ="Password"
                                className ="ph3 br4 pv3"
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}
                                   
                                />
                            <br />

                            <Input
                                placeholder ="Password"
                                className ="ph3 br4 pv3"
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("confirm_password")}
                                value={values.confirm_password}
                                
                            />
                            <br />
                            
                            <strong>
                                View Password
                            </strong>
                            <IconButton
                                className="grow"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword} 
                            >
                                
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            
                            <br />
                            <Link to={"/login"}>
                                <Button 
                                    variant=" grow pa2 mv3 br-pill w-30  b" 
                                    type="submit"
                                    className ="bg-white black-90 f5 hover-bg-blue hover-white"
                                >Reset Password</Button> 
                            </Link>
                                
                            </Form>
                        </Col>
                    </div>
               
                </Row>
            </Container>


        </div>
    );
} 

export default ResetPassword;