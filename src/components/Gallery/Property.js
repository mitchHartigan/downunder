import React, { Component } from "react";
import styled from "styled-components";
import calleBrisa from "./calleBrisa.png";

export default class Property extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  toggleHover = () => {
    this.setState({ hovered: !this.state.hovered });
  };

  render() {
    return (
      <Container
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        hovered={this.state.hovered}
        onClick={this.props.toggleModal(this.props.property)}
      >
        <Title hovered={this.state.hovered}>Calle Brisa</Title>
      </Container>
    );
  }
}

const Title = styled.div`
  font-family: Cardo;
  font-size: 24px;
  text-align: center;
  color: red;
  visibility: ${props => (props.hovered ? "visible" : "hidden")};
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
  @media (max-width: 1100px) {
    width: 700px;
    height: 500px;
  }
  &: hover {
    filter: blur(2px);
    transition: filter 300ms ease;
  }
`;
