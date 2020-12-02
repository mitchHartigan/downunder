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
          Here is the description of the service. Its super awesome, fun, and
          fast as all hell.
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
