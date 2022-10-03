import React from "react";
import SocialIcon from "./socialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tophead() {
  return (
    <div className="topheadline">
        <span className="topcallus">
            <FontAwesomeIcon icon={["fas", "phone-alt"]} />
            <a href="tel:XXX-XXX-XXXX" rel="noopener noreferrer">+1 XXX-XXX-XXXX</a>
        </span>
        {/* <p className="welcomemsg">Welcome to our website</p> */}
        <SocialIcon />
    </div>
  );
}

export default Tophead;
