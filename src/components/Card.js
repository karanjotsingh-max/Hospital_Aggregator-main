import React from 'react';
import { Component } from 'react';
import "./Card.css";
import axios from 'axios';

class Card extends Component {
   
    state = {
      open: true,
    };

    handleClick = () => {
      if (this.state.open) {
        this.setState({
          open: false,
        });
      } else {
        this.setState({
          open: true,
        });
      }
    };

    refreshPage() {
      window.location.reload();
  }

  editReject(id,un){
      var data = {
         
          hospname : this.props.hospname,
          hospspec : this.props.hospspec,
          district : this.props.district,
          hospAddress : this.props.hospAddress,
          ownership : this.props.ownership,
          year : this.props.year,
          email : this.props.email,
          website : this.props.website,
          mobile : this.props.mobile,
          aboutus : this.props.aboutus,
          username : this.props.username,
          password : this.props.password,
          showButton : false,
          showDetails : this.props.showDetails,
          showapproveStatus : this.props.showapproveStatus,
          showrejectStatus : true,
          imagelink:this.props.imagelink
      };
      
      axios.put(("http://localhost:8010/api/test/edithospital/" + un),data)
        .then((result) => {
         
          //   console.log(result.data);
            this.refreshPage();
        });

        
    }

    editApprove(id,un){
      var data = {
         
          hospname : this.props.hospname,
          hospspec : this.props.hospspec,
          district : this.props.district,
          hospAddress : this.props.hospAddress,
          ownership : this.props.ownership,
          year : this.props.year,
          email : this.props.email,
          website : this.props.website,
          mobile : this.props.mobile,
          aboutus : this.props.aboutus,
          username : this.props.username,
          password : this.props.password,
          showButton : false,
          showDetails : true,
          showapproveStatus : true,
          showrejectStatus : this.props.showrejectStatus,
          imagelink:this.props.imagelink
          
      };
      
      axios.put(("http://localhost:8010/api/test/edithospital/" + un),data)
        .then((result) => {
         
          //   console.log(result.data);
            this.refreshPage();
        });

        
    }

    render() {
      return (
        <div
          className={"tc br3 ma4 bw2 dib cardcontainer expand"}
          onClick={this.handleClick}
          
        >
          <div className="upper">
          

          {
          this.props.showapproveStatus
              &&
                  <div className="grow">
                      <strong className="f3 black mh5 dark-green">Status Approved!!!</strong>
                  </div>                                        
          }

          {
          this.props.showrejectStatus
              &&
              <div className="grow">
                 <strong className="f3 black mh5 dark-red ">Status Rejected!!!</strong>
              </div>                                        
          }

              <div className="pb2 f5">
                <img className="avatar mh5 mv2" src={this.props.imagelink} alt="avatar"/>
              </div>

            
              <div className="pb2 f5 tc">
                <b className ="f4">Hospital Name: </b><i>{this.props.hospname}</i>
              </div>

              <div className="pb2 f5 tc">
                <b className ="f4">Hospital Speciality:  </b><i>{this.props.hospspec}</i>
              </div>

             
            
          </div>
          <div className="lower">
            <h3>
              <div className="pb2 f5">
                <b className ="f4">About Hospital:  </b><i>{this.props.aboutus}</i>
              </div>
          
              <div className="pb2 f5">
                <b className ="f4">Address:  </b><i>{this.props.hospAddress}</i>
              </div>

              <div className="pb2 f">
                <b className ="f4">Hospital district:  </b><i>{this.props.district}</i>
              </div>
               
              <div className="pb2 f5">
                <b className ="f4">Ownership:  </b><i>{this.props.ownership}</i>
              </div>

              <div className="pb2 f5">
                <b className ="f4">Year of establishment:  </b><i>{this.props.year}</i>
              </div>
              
              <div className="pb2 f5">
                <b className ="f4">Email:  </b><i>{this.props.email}</i>
              </div>

              <div className="pb2 f5">
                <b className ="f4">Website:  </b><i>{this.props.website}</i>
              </div>
              
              <div className="pb2 f5">
                <b className ="f4">Contact:  </b><i>{this.props.mobile}</i>
              </div>

              {
              this.props.showButton 
                && 
                  <div className="flex">
                      <button className="btn f3 bg-green white grow mr3 " onClick={()=>this.editApprove(this.props.id,this.props.username)}>Approve</button>
                      <button className="btn f3 b bg-dark-red white bn  grow mr3" onClick={()=>this.editReject(this.props.id,this.props.username) }>Reject</button>
                      
                  </div>
              }
             
            </h3>
          </div>
        </div>
      );
    }
  }
  

export default Card;
