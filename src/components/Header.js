import React from "react";
import { NavLink, Logo } from "./molecules";
import DownunderLogo from "../images/downunderLogo.svg";
import styled from "styled-components";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scrolled: window.scrollY !== 0 });
    });
  }

  render() {
    return (
      <Navbar scrolled={this.state.scrolled}>
        <div className="navBar__logoContainer">
          <Logo logoSrc={DownunderLogo}></Logo>
        </div>
        <div className="navBar__navLinkContainer">
          <NavLink>About Us</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Our Work</NavLink>
          <NavLink>Contact</NavLink>
        </div>
      </Navbar>
    );
  }
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0vh 2vw 0vh 2vw;
  margin-right: 0px;
  position: fixed;
  width: 100vw;
  height: 70px;
  z-index: 10;
  background-color: transparent;
  transition: background-color 300ms ease-in;
  background-color: ${(props) => (props.scrolled ? "#6aaf08" : "transparent")};
  box-shadow: ${(props) =>
    props.scrolled ? "2px 1px 6px 1px #304d07;" : "none"}
  transition: background-color 300ms ease;
`;
