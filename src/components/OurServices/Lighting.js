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

export default function Lighting() {
  return (
    <Service>
      <Image src="lighting.svg" alt="" extraStyles="margin-top: 4px;" />
      <Title>Lighting</Title>
      <DescriptionContainer>
        <Description>Here is the description of the service.</Description>
        <FeatureList>
          <Feature>Plants/Trees</Feature>
        </FeatureList>
      </DescriptionContainer>
    </Service>
  );
}
