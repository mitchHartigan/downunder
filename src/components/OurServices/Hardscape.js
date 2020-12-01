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

export default function Hardscape() {
  return (
    <Service>
      <Image
        src="hardscape.svg"
        alt=""
        extraStyles="margin-top: 34px; margin-bottom: -5px"
      />

      <Title>Hardscape</Title>
      <DescriptionContainer>
        <Description>Here is the description of the service.</Description>
        <FeatureList>
          <Feature>Plants/Trees</Feature>
        </FeatureList>
      </DescriptionContainer>
    </Service>
  );
}
