import "./Home.css"

import Navigation from "./Navigation";
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import HospitalServices from './HospitalServices';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            hospital: [],
            searchfield:"",
            
        };
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        HospitalServices.getHospital().then((res) => {
            this.setState({ hospital: res.data });
        }
        );
    }
    refreshPage() {
        window.location.reload();
    }
    handleChange = (event) => {
        this.setState(
            { 
                searchfield: event.target.value 
            })

    }

    render() {
        const {hospital,searchfield} = this.state
        const filteredhospital = hospital.filter(hosp =>{
            return hosp.hospspec.toLowerCase().includes(searchfield.toLowerCase());
          })
        return (
            <div className="yu8 bg-white-30">
                <Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login" />


                <div className='pa2'>
                    <strong className="f4 mr3"> &nbsp; Search by speciality</strong>
                    <input
                        className='pa3 ba bg-lightest-blue w-30'
                        type='search'
                        placeholder='Enter Speciality..'
                        onChange={this.handleChange}

                    />
                    
                </div>

                <h2 className="text-center"> Hospital List</h2>
                <div className="bd-callout bd-callout-info overflow-auto ">
                    <table className="bb  shadow-3 f6 mw8 center width" cellSpacing="auto">
                        <thead className=" bg ">
                            <tr >

                                <th scope="col"><big> HOSPITAL DETAILS</big>
                                </th>
                                <th scope="col"  ><big className="thmain">SPECIALITY</big></th>
                                <th scope="col" colSpan="2" className="tc "><big>ACTION</big></th>
                            </tr>
                        </thead>

                     
                        <tbody id="h1">
                            {
                                filteredhospital.map(
                                    hospital =>
                                        <tr className="m3 shadow shadow-hover drk " id="rd"
                                            key={hospital.id}>
                                            <td className="rf"><big><img className="icon avatar1" src={hospital.imagelink} alt="hosp" width="100px" />Hospital Name: {hospital.hospname}<br />
                                                <strong className="f4">About Hospital: </strong> {hospital.aboutus}</big><div className="hide" id={hospital.id} ><h5>District: {hospital.district}<h5>Address: {hospital.hospaddress}</h5></h5><h5>Mobile: {hospital.mobile}</h5><h5>Website: {hospital.website}</h5><h5>Ownership: {hospital.ownership}</h5><h5>Year: {hospital.year}</h5></div></td>


                                            <td className="kj4"><big>Speciality: {hospital.hospspec}</big></td>
                                            <td>
                                                <Link to={"/enquiry"}><button
                                                    className=" btn btn-outline-primary mr-2" id="btn2">
                                                    <b> SEND ENQUIRY </b>
                                                </button></Link></td>
                                            <td>
                                                <button onClick={() => {
                                                    var x = document.getElementById(hospital.id);
                                                    x.className = "show";


                                                }} className=" btn btn-outline-primary mr-2" id="btn1">
                                                    <b>MORE</b>
                                                </button>


                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default Home;