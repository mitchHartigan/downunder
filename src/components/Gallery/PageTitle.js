import React from "react";
import styled from "styled-components";

export const PageTitle = (props) => {
  const { additionalStyles } = props;

  return (
    <Container additionalStyles={additionalStyles}>
      <Title white={props.white}>{props.children}</Title>
      <Span white={props.white} />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 10vh;
  padding: 2vh 0vh 1vh 0vh;
  ${(props) => props.additionalStyles}
`;

export const Title = styled.h2`
  font-family: "Cardo";
  color: ${(props) => (props.white ? "white" : "black")};
  font-size: 16pt;
  font-weight: 300;
  margin: 1vh 0vw 1vh 0vw;
`;

export const Span = styled.div`
  width: 4vw;
  background-color: ${(props) => (props.white ? "white" : "#6aaf08")};
  height: 0.15vw;
`;
