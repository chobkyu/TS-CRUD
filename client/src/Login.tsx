import React from 'react';
import './css/Login.css';
import {  Link } from "react-router-dom";
import axios from 'axios';


function Login(){
    const onclick = () => {
        
    }
    return (
        
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                        <input id="id" type="text" placeholder="userid"/>
                        <input id="passWord" type="password" placeholder="password"/>
                        <p onClick = {onclick} id="button">login</p>
                        <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
        
    )
}

export default Login;