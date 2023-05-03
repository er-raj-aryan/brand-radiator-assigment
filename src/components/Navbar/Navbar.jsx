import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const pages = [
    { link: "", title: "Home" },
    { link: "about", title: "About" },
    { link: "contact", title: "Contact Us" },
    { link: "login", title: "Admin Login" },
  ];

  function handleMenuClick() {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  }

  function handleLogout(){
    sessionStorage.setItem("adminLogin",false);
    setIsAdminLogged(false);
  }

  useEffect(() => {
    const adminLogin = sessionStorage.getItem("adminLogin")
    if(adminLogin && adminLogin.length > 0) {
      setIsAdminLogged(JSON.parse(adminLogin));
    }
  },[]);

  return (
    <div className="root">
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          Brand Assigment
        </Link>
        <ul className="pageLinksContainer">
          {pages.map((item) => (
            <Link
              to={item.link === "login" && isAdminLogged ? "admin" : item.link}
              className={`pageLink ${
                item.link === "login" ? "adminLogin" : ""
              }`}
            >
              <li>
                {item.link === "login" && isAdminLogged
                  ? "Dashboard"
                  : item.title}
              </li>
            </Link>
          ))}
          {isAdminLogged && (
            <Link to="/" className={`pageLink adminLogin`} onClick={handleLogout}>
              <li>Logout</li>
            </Link>
          )}
        </ul>
        <MenuIcon className="menuIcon" onClick={handleMenuClick} />
      </div>
      <ul className={`menuLinksContainer ${openMenu ? "active" : "disable"}`}>
        {pages.map((item) => (
          <Link
            to={item.link === "login" && isAdminLogged ? "admin" : item.link}
            onClick={handleMenuClick}
            className={`menuLink ${item.link === "login" ? "adminLogin" : ""}`}
          >
            <li>
              {item.link === "login" && isAdminLogged
                ? "Dashboard"
                : item.title}
            </li>
          </Link>
        ))}
        {isAdminLogged && (
          <Link to="/" className={`menuLink adminLogin`} onClick={handleLogout}>
            <li>Logout</li>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
