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
        <Description>
          Here is the description of the service. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi.
        </Description>
        <FeatureList>
          <Feature>Fire Places/Fire Pits</Feature>
          <Feature>Fences/Gates</Feature>
          <Feature>Stone</Feature>
          <Feature>Concrete</Feature>
          <Feature>Fountains</Feature>
          <Feature>BBQ's</Feature>
          <Feature>Swimming Pools</Feature>
        </FeatureList>
      </DescriptionContainer>
    </Service>
  );
}
