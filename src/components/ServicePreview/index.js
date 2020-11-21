import React from "react";
import styled from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";
import { Button } from "../molecules";

export default function ServicePreview() {
  return (
    <PreviewContainer>
      <Preview>
        <DescriptionContainer>
          <PageTitle additionalStyles={"align-items: flex-start"}>
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
          <img src="hardscape.svg" alt="" />
          <ServiceTitle>Hardscape</ServiceTitle>
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
const Preview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  margin: 40px 8vw 50px 8vw;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
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
`;

const ServiceImage = styled.img``;

const PreviewContainer = styled.div`
  width: 100%;
`;

const DescriptionContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const DescriptionText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 40px;
  margin-top: -10px;
`;
