import React from "react";
import {
  Service,
  Title,
  Image,
  DescriptionContainer,
  Description,
  Feature,
  FeatureList,
} from "./index";

export default function Softscape() {
  return (
    <Service>
      <Image src="softscape.svg" alt="" />

      <Title>Softscape</Title>
      <DescriptionContainer>
        <Description>Here is the description of the service.</Description>
        <FeatureList>
          <Feature>Plants/Trees</Feature>
        </FeatureList>
      </DescriptionContainer>
    </Service>
  );
}
