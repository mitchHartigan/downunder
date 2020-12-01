import React from "react";
import styled from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";
import { Button } from "../molecules";

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
            We care a lot about what you want. And we'll make it happen. We care
            a lot about what you want. And we'll make it happen. We care a lot
            about what you want. And we'll make it happen. We care a lot about
            what you want. And we'll make it happen.
          </DescriptionText>
          <Button
            buttonStyle="button--green"
            containerStyle="button__buttonContainer--left"
          >
            View all services
          </Button>
        </DescriptionContainer>

        <ServiceContainer>
          <img src="lighting.svg" alt="" />
          <ServiceTitle>Lighting</ServiceTitle>
          <ServiceDescription>
            Here is a description of this particular service. It is meant to go
            onto two lines of text.
          </ServiceDescription>
        </ServiceContainer>

        <ServiceContainer>
          <img src="softscape.svg" alt="" />
          <ServiceTitle>Softscape</ServiceTitle>
          <ServiceDescription>
            Here is a description of this particular service. It is meant to go
            onto two lines of text.
          </ServiceDescription>
        </ServiceContainer>
      </Preview>
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  height: 40vh;
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
  margin-bottom: ;
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

const ServiceImage = styled.img``;

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
  margin-bottom: 10px;
  margin-top: 15px;
`;
