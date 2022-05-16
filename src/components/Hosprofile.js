import React from "react";
import Navigation from "./Navigation.js";
import "./Hosprofile.css";
import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Hosprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hospital: {}
        };
      }
    componentDidMount() {
        axios.get("http://localhost:8010/api/test/hospital/"+this.props.match.params.username)
          .then(res => {
            this.setState({ hospital: res.data });
            // console.log(res.data);
          });
      }
    
    render(){
        return (
            <div>
                <Navigation Tabchange="Logout" url="/" />
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
                                                    <input class="input--style-5" type="text" name="name" value= {this.state.hospital.hospname}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-row ">
                                            <div class="name">Speciality</div>
                                            <div class="value">
                                                <div class="input-group">
                                                    <input class="input--style-5" type="text" name="speciality" value= {this.state.hospital.hospspec}/>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="form-row ">
                                            <div class="name">Address</div>
                                            <div class="value">
                                                <div class="input-group">
                                                    <input class="input--style-5" type="text" name="address" value= {this.state.hospital.hospAddress}/>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="form-row">
                                            <div class="name">District</div>
                                            <div class="value">
                                                <div class="input-group">
                                                    <input class="input--style-5" type="text" name="district" value= {this.state.hospital.district}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row m-b-55">
                                            <div class="name">Year of Starting</div>
                                            <div class="value">
                                                <div class="row row-refine">
                                                    <div class="col-3">
                                                        <div class="input-group-desc">
                                                            <input class="input--style-5" type="text" name="year" value= {this.state.hospital.year}/>


                                                        </div>
                                                    </div>

                                                    <div class="name tk ">Ownership</div>
                                                    <div class="col-2">

                                                        <div class="input-group-desc">

                                                            <input class="input--style-5" type="text" name="owner" value= {this.state.hospital.ownership}/>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="name">Email</div>
                                            <div class="value">
                                                <div class="input-group">
                                                    <input class="input--style-5" type="email" name="email" value= {this.state.hospital.email}/>
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
                                            <div class="name">Contact</div>
                                            <div class="value">
                                                <div class="row row-refine">
                                                    
                                                    <div class="col-9">
                                                        <div class="input-group-desc">
                                                            <input class="input--style-5" type="text" name="phone"value= {this.state.hospital.mobile} />
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        

                                    
                                        <div class="form-row ">
                                            <div class="name">About Hospital</div>
                                            <div class="value">
                                                <div class="input-group">
                                                    <textarea class="input--style-5 w-90" type="text" name="about" value= {this.state.hospital.aboutus} />
                                                </div>
                                            </div>

                                        </div>

                                    




                                        <Link to={`/editprofile/${this.state.hospital.username}`}><button class="btncss btn--radius-2 btn--red" type="submit">Edit Details</button></Link>
                                        {/* <button class="btncss btn--radius-2 btn--blue fl" type="submit">Save</button> */}

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


export default Hosprofile;


