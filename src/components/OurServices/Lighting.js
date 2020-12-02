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
        <Description>
          Here is the description of the service. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi.
        </Description>
        <FeatureList>
          <Feature>Lighting Design/Layout</Feature>
          <Feature>LED Lighting Systems</Feature>
          <Feature>Conventional Lighting Systems</Feature>
          <Feature>Brass and Copper Fixtures</Feature>
          <Feature>Lighting Repair</Feature>
        </FeatureList>
      </DescriptionContainer>
    </Service>
  );
}
