import React, { Component } from "react";
import styled from "styled-components";

export default class ContactUs extends Component {
  render() {
    return (
      <Container>
        <Description>
          We'd love to bring your ideas to life. FIll out the form below to get
          in touch.
        </Description>
      </Container>
    );
  }
}

const Description = styled.p`
  font-family: Roboto;
  color: white;
  font-size: 13pt;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6aaf08;
`;
