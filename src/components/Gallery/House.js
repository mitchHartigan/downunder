import React, { Component } from "react";
import styled from "styled-components";

export default class House extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    };
  }

  displayModal = () => {
    this.props.toggleModal(this.props.house);
  };

  toggleHover = () => {
    this.setState({ hovered: !this.state.hovered });
  };

  render() {
    const { house } = this.props;
    const { hovered } = this.state;

    return (
      <Container
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={this.displayModal}
        thumbnail={house.thumbnail}
      >
        <Title hovered={hovered}>{house.name}</Title>
      </Container>
    );
  }
}

const Title = styled.div`
  font-family: Cardo;
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
  background-image: url(${(props) => props.thumbnail});
  background-position: center
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
