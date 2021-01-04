import React from "react";
import styled from "styled-components";

import { PageTitle } from "../Gallery/PageTitle";

import Softscape from "./Softscape";
import Hardscape from "./Hardscape";
import Lighting from "./Lighting";
import Design from "./Design";

export default function OurServices() {
  return (
    <Container id="services">
      <PageTitle titleStyles="font-weight: bold">Our Services</PageTitle>
      <ServicesContainer>
        <Softscape />
        <Hardscape />
        <Lighting />
        <Design />
      </ServicesContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-right: 60px;
  margin-left: 60px;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
`;

export const Title = styled.h1`
  margin: 1vh 0vw 1vh 0vw;
  font-size: 20pt;
  font-weight: 600;
  font-family: Cardo;
`;

export const Image = styled.img`
  ${(props) => props.extraStyles}
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
  font-family: Roboto;
  font-size: 13pt;
  line-height: 33px;
  margin: 5px 0px 25px 0px;
  @media (max-width: 1600px) {
    font-size: 12pt;
  }
`;

export const FeatureList = styled.ul`
  margin-left: -40px;
  list-style: none;
`;

export const Feature = styled.li`
  font-family: Roboto;
  margin: 14px 0px 14px 0px;
  font-size: 13pt;
  &:before {
    content: "•";
    font-size: 12pt;
    margin-right: 10px;
  }
  @media (max-width: 1600px) {
    font-size: 12pt;
  }
`;
