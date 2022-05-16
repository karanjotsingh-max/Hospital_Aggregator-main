import React from "react";
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import "./Userregister.css"
import { useState } from "react";
import axios from "axios";
function Userregister(props) {
    const [username,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function signUp(e)
    {
        e.preventDefault()
        let item = {username,email,password,"roles":["admin"]}
        axios.post('http://localhost:8010/api/test/admin/signup', item)
        .then( result => {
            alert(result.data.message)
            props.history.push('/login')
        })
        .catch( err =>{
            alert(err.response.data.error ?? err.response.data.message)
        })
    }

    return (
        <div className="body-info">
        	<Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login"/>
            <div className="signup-form black">
                <form> 
                <h2>Sign Up</h2>
                
                
                <div className="form-group">
                    <div className="input-group">
                        <i className="fa fa-user mr2"></i>
                        <input type="text" value={username} onChange={(e)=>setName(e.target.value)} className="form-control" name="username" placeholder="Username" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        
                        <i className="fa fa-paper-plane mr2"></i>
                        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="input-group">
                       
                        <i className="fa fa-lock mr3"></i>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
                
                <div className="form-group ">
                    <button type="submit" onClick={signUp}  className="btn btn-outline-primary">Sign Up</button>
                </div>

                <div className="text-center black">Already have an account? <NavLink to="/login">Login here</NavLink></div>
            </form>
            </div>

        </div>
    )
}

export default Userregister;
