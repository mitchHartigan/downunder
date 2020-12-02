import React from "react";
import { TitleText } from "./molecules";
import styled from "styled-components";
import ScrollWrapper from "./ScrollWrapper";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__heroTextContainer">
        <TitleText textStyle={"hero__titleText"}>Downunder Landscape</TitleText>
        <TitleText textStyle={"hero__subtitleText"}>
          Making backyard dreams come true for over
          <br></br>
          30 years in Orange County.
        </TitleText>
        <ButtonContainer>
          <ScrollWrapper target="contact-us">
            <CTAButton>Contact Us</CTAButton>
          </ScrollWrapper>
        </ButtonContainer>
      </div>
    </div>
  );
}

const CTAButton = styled.button`
  font-weight: normal;
  font-family: Cardo;
  font-size: 16pt;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 5px 30px 5px 30px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid white;
  box-shadow: 0px 0px 0px 0px transparent;
  transition: box-shadow 150ms ease;
  outline: none;
  &: hover {
    box-shadow: 0px 0px 3px 1px white;
    transition: box-shadow 150ms ease;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
