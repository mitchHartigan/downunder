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
        <Description>
          Here is the description of the service. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi.
        </Description>
        <FeatureList>
          <Feature>Plants/Trees</Feature>
          <Feature>Irrigation Systems</Feature>
          <Feature>Drain Systems</Feature>
          <Feature>Artificial Turf</Feature>
          <Feature>Grass/Sod</Feature>
        </FeatureList>
      </DescriptionContainer>
    </Service>
  );
}
