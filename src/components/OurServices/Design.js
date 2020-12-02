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

export default function Design() {
  return (
    <Service>
      <Image src="design.svg" alt="" extraStyles="margin-top: 19px;" />
      <Title>Design</Title>
      <DescriptionContainer>
        <Description>
          Here is the description of this service. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi.
        </Description>
        <FeatureList>
          <Feature>Plants/Trees</Feature>
          <Feature>Planting Consultation</Feature>
          <Feature>Permitting Service</Feature>
          <Feature>Conceptual Plans</Feature>
          <Feature>Architectural Services</Feature>
        </FeatureList>
      </DescriptionContainer>
    </Service>
  );
}
