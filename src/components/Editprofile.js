import React, { Component } from 'react';
import axios from 'axios';

import Navigation from "./Navigation.js";
import "./Hosprofile.css";

class Editprofile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hospital: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

 

  componentDidMount() {
    axios.get('http://localhost:8010/api/test/hospital/'+this.props.match.params.username)
    .then(res => {
        this.setState({ hospital: res.data,
        });
        console.log(this.state.hospital);
       
    });
    }

  onChange = (e) => {
    const state = this.state.hospital
    state[e.target.name] = e.target.value;
    this.setState({hospital:state});
  }
  

  onSubmit = (e) => {
    e.preventDefault();

    var data = {
           
        hospname : this.state.hospital.hospname,
        hospspec : this.state.hospital.hospspec,
        district : this.state.hospital.district,
        hospAddress : this.state.hospital.hospAddress,
        ownership : this.state.hospital.ownership,
        year : this.state.hospital.year,
        email : this.state.hospital.email,
        website : this.state.hospital.website,
        mobile : this.state.hospital.mobile,
        aboutus : this.state.hospital.aboutus,
        username : this.state.hospital.username,
        showButton : true,
        showDetails : false,
        showapproveStatus : false,
        showrejectStatus : false,
        imagelink:this.state.hospital.imagelink
        
    };
    axios.put("http://localhost:8010/api/test/edithospital/"+this.props.match.params.username, data)
      .then((result) => {
        this.props.history.push("/hosprofile/"+this.state.hospital.username)
      });
  }

  render() {
    return (
        <div>
        <Navigation Tabchange="Logout" url="/hospitallogin" />
        <body>
            <div class="page-wrapper p-t-45 p-b-50">
                <div class="wrapper wrapper--w790">
                    <div class="card card-5">
                        <div class="card-heading">
                            <h2 class="title">Welcome, {this.state.hospital.username}</h2>
                        </div>
                        <div class="card-body">
                            <form method="POST">
                                <div className="pb2 f5">
                                    <img className="avatar mh5 mv2" src= {this.state.hospital.imagelink}alt="avatar"/>
                                </div>
                                <div class="form-row">
                                    <div class="name">Hospital Name</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <input class="input--style-5" type="text" name="hospname" value= {this.state.hospital.hospname} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row ">
                                    <div class="name">Speciality</div>
                                    <div class="value">
                                        <div class="input-group">
                                        <select className="input--style-5 w-100 speciality" type="text" name="hospspec"  value={this.state.hospital.hospspec} onChange={this.onChange} required>
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
                                    </div>

                                </div>

                                <div class="form-row ">
                                    <div class="name">Address</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <input class="input--style-5" type="text" name="hospAddress" value= {this.state.hospital.hospAddress} onChange={this.onChange}/>
                                        </div>
                                    </div>

                                </div>
                                <div class="form-row">
                                    <div class="name">District</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <input class="input--style-5" type="text" name="district" value= {this.state.hospital.district} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row m-b-55">
                                    <div class="name">Year of Starting</div>
                                    <div class="value">
                                        <div class="row row-refine">
                                            <div class="col-3">
                                                <div class="input-group-desc">
                                                    <input class="input--style-5" type="text" name="year" value= {this.state.hospital.year} onChange={this.onChange}/>


                                                </div>
                                            </div>

                                            <div class="name tk ">Ownership</div>
                                            <div class="col-2">

                                                <div class="input-group-desc">

                                                    <input class="input--style-5" type="text" name="ownership" value= {this.state.hospital.ownership} onChange={this.onChange}/>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Email</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <input class="input--style-5" type="email" name="email" value= {this.state.hospital.email} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Website</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <input class="input--style-5" type="text" name="website" value= {this.state.hospital.website} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row m-b-55">
                                    <div class="name">hospital</div>
                                    <div class="value">
                                        <div class="row row-refine">
                                            
                                            <div class="col-9">
                                                <div class="input-group-desc">
                                                    <input class="input--style-5" type="text" name="mobile"value= {this.state.hospital.mobile} onChange={this.onChange} />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                            
                                <div class="form-row ">
                                    <div class="name">About Hospital</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="input--style-5 w-90" type="text" name="aboutus" value= {this.state.hospital.aboutus} onChange={this.onChange} />
                                        </div>
                                    </div>

                                </div>

                                <div className="ml7">
                                <button class="btncss btn--radius-2 btn--blue fl " type="submit" onClick={this.onSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </body>


    </div>


    );
  }
}

export default Editprofile;