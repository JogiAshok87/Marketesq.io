// Login.js

import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
    const navigate = useNavigate();
  const [input, setInput] = useState({email:"",password:""});


  const handleSubmit = (e) => {

    e.preventDefault();
    // Handle login logic here
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (input.email === loggedUser.email && input.password === loggedUser.password){
        localStorage.setItem("loggedin",true)
        navigate("/")
    }else{
        alert("wrong Email or password")
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}/>
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="register-link">
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
