import React from 'react';
import Navigation from "./Navigation";
import hospitalicon from '../images/hospital.jpg';
import axios from "axios";
import {Col, Container,Row} from "react-bootstrap";
import "./Hospitalregister.css";
import { Component } from 'react';

class Enquiry extends Component {
	constructor(props){
        super(props);

        this.state = {
			name : "",
			address : "",
			email : "",
			mobile : "",
			query : "",
		
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
		
    }

	handleFormSubmit = event => {
        event.preventDefault();
    
        const endpoint = "http://localhost:8010/api/auth/enquiry";
		
		const { name, address,
				email, mobile,
				query } = this.state;


        const enquiry = {
			name: name,
			address: address,
			email: email,
			mobile: mobile,
			query: query,
		};

		this.setState({
			name : "",
			address : "",
			email : "",
			mobile : "",
			query : "",
        });
		
		axios.post(endpoint, enquiry).then(res => {
			
			alert("Enquiry Submitted Successfully")
			this.props.history.push("/");
		  
        })
        
      };
        
    

    handleChange (e) {
        this.setState(
            {
            [e.target.name] 
                : e.target.value 
            }
        );
    };



	render() {
		return(
			<div>
				<Navigation Tabchange="Sign in" url="/login"/>
				<Container className="mt-5 body-info">
					<Row>
					<br/>
						<div className="w-50 bg-light black center br4">
							
							<h2> Send us your Query</h2> 

							<Col lg={4} md={6} sm={12} className="mt-5 p-3">
								<img className="icon-img mv2 br-100 h4 w4 dib" src={hospitalicon} alt="icon"/>
								<form className="measure center">
									<fieldset id="sign_up " className="ba b--transparent ph0 mh0">

									
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Your Name:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="name"  value={this.state.name} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Address:</label>
											<textarea className="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "address" value={this.state.address} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Email-id:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="email" name="email"  id="email-address"  value={this.state.email} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Contact-details:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="tel" pattern="[0-9]{4}[0-9]{2}[0-9]{4}" name="mobile" placeholder="10 digit mobile number"  value={this.state.mobile} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Your Query in short:</label>
											<textarea className="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "query" value={this.state.query} onChange={this.handleChange} required/>
										</div>										
										
									</fieldset>
									
									<div>
									<input className="b ph3 pv2 mv2 input-reset ba btn-primary bn grow pointer f4 dib" type="submit" onClick={this.handleFormSubmit} value="Submit" />
									</div>

								</form>
							</Col>
						</div>
						<br />
						
					</Row>
				</Container>

			</div>
			);
	}
}

export default Enquiry;
