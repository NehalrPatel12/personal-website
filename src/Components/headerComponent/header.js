import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import SocialIcon from "./socialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
    function handleClick(e) {
       e.preventDefault();
       window.open('https://github.com/');
    }
  
  return (
        <header className="header">
          <div className="header-inner">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/home" rel="noopener noreferrer">
                <img src={Logo} alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={["fas", "bars"]} />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/resume">
                      Resume
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/tools">
                      Tools
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact-us">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <div className="header-contact text-right">
                  <span className="topcallus">
                    <a href="tel:XXX-XXX-XXXX" rel="noopener noreferrer">+1 987 (654) 3210</a>
                  </span>
                  <SocialIcon />
                </div>
              </div>
            </nav>
          </div>
        </header>
  );
}

export default Header;
