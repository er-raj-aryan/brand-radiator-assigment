import React, { useState } from 'react'
import "./Login.css";

function Login() {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    message:''
  });
  const [errorMessage,setErrorMessage] = useState('');


  function handleSubmit(event){
    event.preventDefault();
    if(formData.email !== '' && formData.message !== '' && formData.name !== ''){

    } else {
      setErrorMessage('Please fill the required field')
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
        }}
        method="POST"
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label>Email<span className="required">*</span></label>
          <input className="standard-input" name="name" value={formData.name} onChange={handleInput}/>
          <label>Password<span className="required">*</span></label>
          <input className="standard-input" name="email" onChange={handleInput} value={formData.email} />
        </div>
        <div className="login-submit-container">
          <button type="submit" className="form-login-button" >
            Login
          </button>
        </div>
      </form>
      <div className="formErrorMessage">{errorMessage}</div>
    </div>
  );
}

export default Login