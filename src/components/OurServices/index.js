import React from "react";
import styled from "styled-components";

import { PageTitle } from "../Gallery/PageTitle";

import Softscape from "./Softscape";
import Hardscape from "./Hardscape";
import Lighting from "./Lighting";
import Design from "./Design";

export default function OurServices() {
  return (
    <Container>
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
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
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
  font-size: 14pt;
`;

export const FeatureList = styled.ul`
  padding-left: 20px;
`;

export const Feature = styled.li`
  font-family: Roboto;
  margin: 10px 0px 10px 0px;
  font-size: 14pt;
`;
