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
        <Description>Here is the description of the service.</Description>
        <FeatureList>
          <Feature>Plants/Trees</Feature>
        </FeatureList>
      </DescriptionContainer>
    </Service>
  );
}
