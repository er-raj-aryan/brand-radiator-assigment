import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [contactUsData, setContactUsData] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const adminLogin = sessionStorage.getItem("adminLogin")
    if(adminLogin && adminLogin.length > 0) {
      if(!JSON.parse(adminLogin)){
        navigate('/')
      }
    }
    const CookiesData = Cookies.get("ContactUs");
    if (CookiesData && CookiesData.length > 0){
      setContactUsData(JSON.parse(CookiesData));
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [navigate]);

  if (loading) {
    return(
      <div className='loading'>Please Wait...</div>
    )
  }

  return (
    <div className="admin-root">
      <table >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
        {contactUsData.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.message}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Admin;
