import React from 'react';
import Navigation from "./Navigation";
import hospitalicon from '../images/hospital.jpg';
import axios from "axios";
import {Col, Container,Row} from "react-bootstrap";
import "./Hospitalregister.css";
import { Component } from 'react';

class Hospitalregister extends Component {
	constructor(props){
        super(props);

        this.state = {
			hospname : "",
			hospspec : "",
			district : "",
			hospAddress : "",
			ownership:"",
			year : "",
			email : "",
			website : "",
			mobile : "",
			aboutus : "",
            username : "",
            password : "",
			roles : ["hospital"],
			showButton: true,
			showDetails: false,
			showapproveStatus: false,
			showrejectStatus:false,
			imagelink:""
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
		
	}

	handleFormSubmit = event => {
        event.preventDefault();
    
        const endpoint = "http://localhost:8010/api/auth/signup";
		
		var { hospname, hospspec, district,
				hospAddress, ownership, year,
				email, website, mobile,
				aboutus, username, password, roles,
				showButton,showDetails,
				showapproveStatus,showrejectStatus,imagelink} = this.state;

		if(imagelink === ""){
			imagelink="https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w"
		}
        const hospital_user = {
			hospname: hospname,
			hospspec: hospspec,
			district: district,
			hospAddress: hospAddress,
			ownership: ownership,
			year: year,
			email: email,
			website: website,
			mobile: mobile,
			aboutus: aboutus,
			username: username,
			password: password,
			roles: roles,
			showButton:showButton,
			showDetails:showDetails,
			showapproveStatus:showapproveStatus,
			showrejectStatus:showrejectStatus,
			imagelink:imagelink
			
        };

		this.setState({
			hospname : "",
			hospspec : "",
			district : "",
			hospAddress : "",
			ownership:"",
			year : "",
			email : "",
			website : "",
			mobile : "",
			aboutus : "",
            username : "",
            password : "",
			imagelink:""
		});
    
        axios.post(endpoint, hospital_user).then(res => {
			
			alert("Hospital Registered Successfully")
			this.props.history.push("/hospitallogin");
			     
        })
        
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
				<Navigation Tabchange1="Admin Sign in" url1="/login" Tabchange="Hospital Sign in" url="/hospitallogin"/>
				<Container className="mt-5 body-info">
					<Row>
					<br/>
						<div className="w-50 bg-light black center br4">
							
							<h2> Register as Hospital with us!</h2> 

							<Col lg={4} md={6} sm={12} className="mt-5 p-3">
								<img className="icon-img mv2 br-100 h4 w4 dib" src={hospitalicon} alt="icon"/>
								<form className="measure center">
									<fieldset id="sign_up " className="ba b--transparent ph0 mh0">

									
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Hospital-Name:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="hospname" value={this.state.hospname} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Hospital-Speciality:</label>
											<select className="pa2 input-reset ba bg-transparent w-75" type="text" name="hospspec"  value={this.state.hospspec} onChange={this.handleChange} required>
												<option value="Select one speciality">Select one Speciality</option>
												<option value="skin">skin</option>
												<option value="nose">nose</option>
												<option value="ear">ear</option>
												<option value="eye">eye</option>
												<option value="cardio">cardio</option>
												<option value="neuro">neuro</option>
												<option value="orthopadeic">orthopadeic</option>
												<option value="physiotherapist">physiotherapist</option>
												<option value="vetenerian">vetenerian</option>
												<option value="Pathology">Pathology</option>
												<option value="Pediatrics">Pediatrics</option>
												<option value="chest">chest</option>
												<option value="Urology">Urology</option>
												<option value="Psychatrist">Psychatrist</option>
												
												
											</select>	
										</div>
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">District:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="district"  value={this.state.district} onChange={this.handleChange} required/>
										</div>
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Address:</label>
											<textarea className="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "hospAddress" value={this.state.hospAddress} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Ownership</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="ownership" placeholder="Public/Private"  value={this.state.ownership} onChange={this.handleChange} required />
											
										</div>
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Year of Starting:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="year"  value={this.state.year} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Email-id:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="email" name="email"  id="email-address"  value={this.state.email} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Website(if any):</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="url" name="website" placeholder="include http" value={this.state.website} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Contact-details:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="tel" pattern="[0-9]{4}[0-9]{2}[0-9]{4}" name="mobile" placeholder="10 digit mobile number"  value={this.state.mobile} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">About hospital in short:</label>
											<textarea className="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "aboutus" placeholder="about you inshort"value={this.state.aboutus} onChange={this.handleChange} required/>
										</div>
										
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Username:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} required/>
										</div>
										
										<div className="mv3">
											<label className="db fw6 lh-copy lh-copy f4">Password</label>
											<input className="b pa2 input-reset ba bg-transparent w-75" type="password" name="password"  id="password"  value={this.state.password} onChange={this.handleChange} required/>
										</div>
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Image Link:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" placeholder="Link for your avatar(Type 'Default' for Default)" name="imagelink" value={this.state.imagelink} onChange={this.handleChange} />
										</div>
										
									</fieldset>
									
									<div>
									<input className="b ph3 pv2 input-reset ba btn-primary bn grow pointer f4 dib" type="submit" onClick={this.handleFormSubmit} value="Sign up as Hospital" />
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

export default Hospitalregister;
// Sanket_testing