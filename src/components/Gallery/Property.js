import React, { Component } from "react";
import styled from "styled-components";
import calleBrisa from "./calleBrisa.png";

export default class Property extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    };
  }

  toggleHover = () => {
    this.setState({ hovered: !this.state.hovered });
  };

  render() {
    const { toggleModal } = this.props;
    const { hovered } = this.state;

    return (
      <Container
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={toggleModal}
      >
        <Title hovered={hovered}>Calle Brisa</Title>
      </Container>
    );
  }
}

const Title = styled.div`
  font-family: Roboto;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  color: white;
  text-shadow: 2px 1px 2px black;
  opacity: ${(props) => (props.hovered ? "1" : "0")};
  transition: opacity 150ms linear;
`;

const Container = styled.div`
  width: 400px;
  height: 300px;
  margin: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url(${calleBrisa});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: box-shadow 200ms linear;
  @media (max-width: 1100px) {
    width: 700px;
    height: 500px;
  }
  &: hover {
    box-shadow: 0px 2px 12px #467506;
    transition: box-shadow 200ms ease;
  }
`;
