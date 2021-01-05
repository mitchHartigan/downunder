import React from "react";
import styled from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";
import { Button } from "../molecules";
import ScrollWrapper from "../ScrollWrapper";

export default function ServicePreview() {
  return (
    <PreviewContainer>
      <Preview>
        <DescriptionContainer>
          <PageTitle
            additionalStyles={"align-items: flex-start"}
            titleStyles={"font-weight: 600"}
          >
            Let's build your dream garden.
          </PageTitle>
          <DescriptionText>
            We strive to create landscapes that fit every client’s lifestyle and
            budget. Our experience allows us to work with a budget with out
            sacrificing quality or customer service. Our goal is to help you
            achieve a landscape that you will enjoy every day. So come say G’
            Day, and let us help you relax in your own backyard.
          </DescriptionText>
          <ScrollWrapper target="services">
            <Button
              buttonStyle="button--green"
              containerStyle="button__buttonContainer--left"
            >
              View our Services
            </Button>
          </ScrollWrapper>
        </DescriptionContainer>

        <ServiceContainer>
          <img src="lighting.svg" alt="" />
          <ServiceTitle>Lighting</ServiceTitle>
          <ServiceDescription>
            Lighting allows your garden and home architecture to take on a whole
            new dimension.
          </ServiceDescription>
        </ServiceContainer>

        <ServiceContainer>
          <img src="softscape.svg" alt="" />
          <ServiceTitle>Softscape</ServiceTitle>
          <ServiceDescription>
            The beauty and variety of plants can transform a yard into a living,
            breathing haven.
          </ServiceDescription>
        </ServiceContainer>
      </Preview>
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1600px) {
    height: 50vh;
  }
`;

const Preview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  margin-bottom: 20px;
  margin-left: 5vw;
  margin-right: 5vw;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
  @media (max-width: 1600px) {
    width: 25vw;
  }
`;

const ServiceTitle = styled.h2`
  font-family: Cardo;
  font-size: 24px;
  margin: 10px 0px 0px 0px;
  padding: 0px;
  text-align: center;
`;

const ServiceDescription = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: -10px;
`;

const DescriptionContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 1600px) {
    width: 30vw;
  }
`;

const DescriptionText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 40px;
  margin-bottom: 15px;
  margin-top: 10px;
`;
