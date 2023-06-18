import React from "react";

// Icons
import { IconContext } from "react-icons";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

const Footer = (props) => {
  return (
    <div className="footer">
      <IconContext.Provider
        value={{
          color: "white",
          size: "2em",
          className: "global-class-name",
        }}
      >
        {" "}
        <a href="https://www.facebook.com/annikalv">
          <FiFacebook />
        </a>{" "}
        <a href="https://www.linkedin.com/in/annika-louise-eng%C3%B8y-b1959b1a4/">
          <FiLinkedin />
        </a>{" "}
        <a href="https://github.com/Annikaenjoy">
          <FiGithub />
        </a>
        {/* <a href="#">
            <FiHeart />
          </a> */}
      </IconContext.Provider>
      <p> &copy; Designed & built by Annika Engøy 2023</p>
    </div>
  );
};

export default Footer;
