import React, { useState } from 'react'
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData,setFormData] = useState({
    email:'',
    password:'',
  });
  const [errorMessage,setErrorMessage] = useState('');
  let navigate = useNavigate();


  function handleSubmit(event){
    event.preventDefault();
    if(formData.email === 'admin@mail.com' && formData.password === 'admin123'){
      navigate('/admin');
      sessionStorage.setItem('adminLogin',true);
      window.location.reload();
    } else {
      setErrorMessage('Please fill the required field');
    }
  }

  function handleInput(event){
    const name = event.target.name;
    const value = event.target.value;
    setFormData({...formData, [name] : value });
    setErrorMessage('')
  }
  



  return (
    <div className="root-contact-us">
      <form
        style={{
          display: "flex",
          alignItem: "center",
          flexDirection: "column",
          width: "500px",
          gap: 35,
          padding:20,
        }}
        method="POST"
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label>Email<span className="required">*</span></label>
          <input className="standard-input" name="email" value={formData.email} onChange={handleInput}/>
          <label>Password<span className="required">*</span></label>
          <input className="standard-input" name="password" onChange={handleInput} value={formData.password} />
        </div>
        <div className="login-submit-container">
          <button type="submit" className="form-login-button" >
            Login
          </button>
        </div>
      </form>
      <div className="formErrorMessage">{errorMessage}</div>
      <div>Note:- for login Email: admin@mail.com && Password: admin123</div>
    </div>
  );
}

export default Login;