import React, { useState } from 'react'
import axios from 'axios';
import reactDom from "react-dom";
import Auth from './Auth';

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const user = new Auth()
    function login(){
        user.login(email, password)
    }

    return ( 
        <>
        
        <div className="col-sm-6 offset-sm-3">
            <h1>Login Page</h1>
            <input type="text" placeholder="email" 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-control"/>
            <br/>
            <input type="password" placeholder="password" 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-control"/>
            <br/>
            <button onClick={login} className="btn btn-primary">
                Login
            </button>
        </div>
        </>
     );
}
 
export default LoginForm;