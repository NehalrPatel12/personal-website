import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon() {
  return (
    <ul className="right-nav">
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nehal-patel-2866bb47"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcon;
