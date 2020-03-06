import React from "react";
import { NavLink, Logo } from "./molecules";
import DownunderLogo from "../images/downunderLogo.svg";

export default function Header(props) {
  return (
    <div className="navBar">
      <div className="navBar__logoContainer">
        <Logo logoSrc={DownunderLogo}></Logo>
      </div>
      <div className="navBar__navLinkContainer">
        <NavLink>About Us</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Our Work</NavLink>
        <NavLink>Contact</NavLink>
      </div>
    </div>
  );
}
