import React from "react";
import logo from "../../image/Logo (1).png";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import "./index.scss";
import "./../../App.scss"


const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--nav">
            <img src={logo} alt="" />
            
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/recent">Recent</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </div>
          <div className="header--icon">
              <BsSearch />
              <FaLock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
