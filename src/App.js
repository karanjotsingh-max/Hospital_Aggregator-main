import React,{Component} from "react";
import Login from  "./components/Login";
import Userregister from "./components/Userregister";
import Hospitalregister from "./components/Hospitalregister";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Loginhospital from "./components/Loginhospital";
import Enquiry from "./components/Enquiry";
import Admin from "./components/Admin"
import Hosprofile from "./components/Hosprofile";
import Editprofile from "./components/Editprofile";

class App extends Component{
  render(){
    return (
    <BrowserRouter>
      <div className="tc bg-black-10 Sbody">
          
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route path = "/login" component = {Login}/>
                <Route path= "/hospitallogin" component ={Loginhospital}/>
                <Route path="/hospitalregister" component ={Hospitalregister}/>
                <Route path="/userregister" component = {Userregister}/>
                <Route path="/forgotpassword" component = {ForgotPassword}/>
                <Route path = "/resetpassword" component = {ResetPassword}/>
                <Route path = "/admin" component = {Admin}/>
                <Route path = "/enquiry" component = {Enquiry}/>
                <Route path="/hosprofile/:username" component={Hosprofile}/>
                <Route path="/editprofile/:username" component={Editprofile}/>
           
            </Switch>
        
      </div>
    </BrowserRouter>
   
  );  
  }
  
}

export default App;