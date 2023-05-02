import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const pages = [
    { link: "", title: "Home" },
    { link: "about", title: "About" },
    { link: "contact", title: "Contact Us" },
    { link:"login",title:"Admin Login"}
  ];

  function handleMenuClick() {
    if(!openMenu){
      setOpenMenu(true)
    }else {
      setOpenMenu(false)
    }
  }

  return (
    <div className="root">
      <div className="navbar">
        <div>Brand Assigment</div>
        <ul className="pageLinksContainer">
          {pages.map((item) => (
            <Link to={item.link} className={`pageLink ${item.link === 'login' ? 'adminLogin':''}`}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
        <MenuIcon className="menuIcon" onClick={handleMenuClick} />
      </div>
      <ul className={`menuLinksContainer ${openMenu ? 'active':'disable'}`}>
        {pages.map((item) => (
          <Link to={item.link} onClick={handleMenuClick} className={`menuLink ${item.link === 'login' ? 'adminLogin':''}`}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
