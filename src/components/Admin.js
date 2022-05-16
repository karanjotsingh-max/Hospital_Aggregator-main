import React from 'react';
import Navigation from "./Navigation.js";
import axios from 'axios';
import { Component } from 'react';
import "./Admin.css"
import Cardlist from "./Cardlist"

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hospital: [],
          searchfield:"",
          filteredHospitals:[]
        };
        
        this.editReject = this.editReject.bind(this);
        this.editApprove = this.editApprove.bind(this);
        this.handleChange = this.handleChange.bind(this);
      };
    
    componentDidMount() {
        axios.get("http://localhost:8010/api/test/getalluser")
        .then(res => {
            this.setState({ hospital: res.data,
            filteredHospitals:res.data });
           
        });
    }

    refreshPage() {
        window.location.reload();
    }

    editReject(id,un){
        var data = {
           
            hospname : this.state.hospital[id].hospname,
            hospspec : this.state.hospital[id].hospspec,
            district : this.state.hospital[id].district,
            hospAddress : this.state.hospital[id].hospAddress,
            ownership : this.state.hospital[id].ownership,
            year : this.state.hospital[id].year,
            email : this.state.hospital[id].email,
            website : this.state.hospital[id].website,
            mobile : this.state.hospital[id].mobile,
            aboutus : this.state.hospital[id].aboutus,
            username : this.state.hospital[id].username,
            showButton : false,
            showDetails : this.state.hospital[id].showDetails,
            showapproveStatus : this.state.hospital[id].showapproveStatus,
            showrejectStatus : true,
            imagelink:this.state.hospital[id].imagelink
        };
        
        axios.put(("http://localhost:8010/api/test/edithospital/" + un),data)
          .then((result) => {
           
            //   console.log(result.data);
              this.refreshPage();
          });

          
      }

      editApprove(id,un){
        var data = {
           
            hospname : this.state.hospital[id].hospname,
            hospspec : this.state.hospital[id].hospspec,
            district : this.state.hospital[id].district,
            hospAddress : this.state.hospital[id].hospAddress,
            ownership : this.state.hospital[id].ownership,
            year : this.state.hospital[id].year,
            email : this.state.hospital[id].email,
            website : this.state.hospital[id].website,
            mobile : this.state.hospital[id].mobile,
            aboutus : this.state.hospital[id].aboutus,
            username : this.state.hospital[id].username,
            showButton : false,
            showDetails : true,
            showapproveStatus : true,
            showrejectStatus : this.state.hospital[id].showrejectStatus,
            imagelink:this.state.hospital[id].imagelink
            
        };
        
        axios.put(("http://localhost:8010/api/test/edithospital/" + un),data)
          .then((result) => {
           
            //   console.log(result.data);
              this.refreshPage();
          });

          
      }

      handleChange = (event) => {
        this.setState(
            { 
                searchfield: event.target.value 
            })

        if(event.target.value === "Accepted"){
            this.setState({
                filteredHospitals: this.state.hospital.filter(hospital =>{
                    return hospital.showapproveStatus===true;
                    })
            })
        }

        else if(event.target.value === "Rejected"){
            this.setState({
                filteredHospitals: this.state.hospital.filter(hospital =>{
                    return hospital.showrejectStatus===true;
                    })
            })
        }

        else if(event.target.value === "New"){
            this.setState({
                filteredHospitals: this.state.hospital.filter(hospital =>{
                    return hospital.showButton===true;
                    })
            })
        }

        else if(event.target.value === ""){
            this.setState({
                filteredHospitals: this.state.hospital
            })
        }
        
      }

    render() {
      
        
        return(
            
            <div className="bg-white">
                <Navigation Tabchange="Logout" url="/" Tabchange1="Welcome, Admin"/>
                <h1>
                    <strong>
                        Admin Page
                    </strong>
                </h1>
                <hr className="w-20 admin bg-black center"/>
                <br/>
                <strong className="f2">
                    List of new Hospitals Registered 
                </strong>
               <hr className=" bg-black"/>
               
               <div className='pa2'>
                    <strong className="f4 mr3">Show All:</strong>
                    <input
                        className='pa3 ba bg-lightest-blue w-30'
                        type='search'
                        placeholder='Type Accepted Or Rejected or New'
                        onChange={this.handleChange}
                    />
                </div>
                
               
                <Cardlist hospitals={this.state.filteredHospitals}/ >
             	
               
               
            </div>
        );
    }
}

export default Admin;