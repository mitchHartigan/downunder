import React, { Component } from "react";
import styled from "styled-components";

export default class Modal extends Component {
  render() {
    return (
      <Container>
        <Title>{"Ayy lmao"}</Title>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 80vh;
  width: 80vw;
  position: fixed;
  z-index: 1;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 14px;
  font-family: Cardo;
  font-weight: 300;
`;
