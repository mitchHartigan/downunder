import React from "react";
import styled from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";

export default function AboutUs() {
  return (
    <Container>
      <PageTitle white="true">About Us</PageTitle>
      <HarborBridge src="AboutUs_opera_house.svg" alt="" />
      <Description>
        Michael came to the United Stated in the late 1980’s and started
        Downunder Landscape in South Orange County. His passion lies in
        landscape renovation. It is here where he can take a yard and
        artistically repurpose it. He transforms the ordinary, tired garden into
        a useful, beautiful, ecologically friendly space, with a subtle
        Australian flair. He creates spaces that are aesthetically pleasing, and
        highly functional – taking inspiration from his roots of exotic
        wildlife, rugged coastlines and rainforests of Australia.
      </Description>
      <Description>
        Enthusiasm for landscape still shows in Michael’s desire to provide each
        customer with a high level of service, and a professional end product.
        He is creative, personable, and listens to his customers. Whether you
        need a small tune up or a major project done, Michael will be there to
        say G-day.
      </Description>
    </Container>
  );
}

const Container = styled.div`
  background-color: #6aaf08;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const HarborBridge = styled.img`
  margin-top: 45px;
  margin-bottom: 50px;
  margin-right: -5px;
  width: 500px;
  height: auto;
`;

const Description = styled.p`
  margin: 0px;
  margin-bottom: 25px;
  font-family: Roboto;
  font-size: 14pt;
  line-height: 35px;
  color: white;
  text-align: justify;
  text-justify: inner-word;
  padding: 0vh 14vw 0vh 14vw;
`;
