// Register.js

import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './index.css';

const Register = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({name:"",email:"",password:""});


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    

    localStorage.setItem("user",JSON.stringify(input))
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" name="name" value={input.name} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      <div className="login-link">
        <p>Have already an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
