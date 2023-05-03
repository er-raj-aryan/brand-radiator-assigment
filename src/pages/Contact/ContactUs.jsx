import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    message:''
  });
  const [errorMessage,setErrorMessage] = useState('');
  const [successMessage,setSuccessMessage] = useState('');
  const [storedData,setStoredData]= useState([]);

  useEffect(() => {
    const CookiesData = Cookies.get('ContactUs');
    if(CookiesData && CookiesData.length > 0){
      setStoredData(JSON.parse(CookiesData));
    }
  },[])

  function handleSubmit(event){
    event.preventDefault();
    const tFormData = storedData;
    if(formData.email !== '' && formData.message !== '' && formData.name !== ''){
      tFormData.push(formData);
      Cookies.set('ContactUs',JSON.stringify(tFormData));
      setSuccessMessage('Successfully submitted we connect with you soon')
      resetForm();
    } else {
      setErrorMessage('Please fill all the required field')
    }
  }
  
  function resetForm(){
    setFormData({
      name:'',
      email:'',
      message:''
    })
  }

  function handleInput(event){
    const name = event.target.name;
    const value = event.target.value;
    setFormData({...formData, [name] : value })
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
          <label>Name<span className="required">*</span></label>
          <input className="standard-input" name="name" value={formData.name} onChange={handleInput}/>
          <label>Email<span className="required">*</span></label>
          <input className="standard-input" name="email" onChange={handleInput} value={formData.email} />
          <label>Message<span className="required">*</span></label>
          <textarea
            value={formData.message}
            onChange={handleInput}
            className="standard-message"
            name="message"
            rows="6"
            cols="50"
          />
        </div>
        <div className="submit-button-container">
          <input style={{cursor:'pointer'}} type="submit" className="form-submit-button" />
        </div>
      </form>
      <div className="formSuccessMessage">{successMessage}</div>
      <div className="formErrorMessage">{errorMessage}</div>
    </div>
  );
}

export default ContactUs;
