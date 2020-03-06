import React from "react";
import { Description } from "./molecules";
import { Service } from "../molecules";
import Lighting from "../../images/lighting.svg";
import Softscape from "../../images/softscape.svg";

export function CallToAction(props) {
  return (
    <div className="callToAction">
      <Description
        title={"Let's build your dream garden."}
        buttonText={"View All Services"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        <br />
        aliquet, orci sit amet suscipit ornare, ipsum ligula euismod arcu,
        <br />
        dignissim molestie velit enim sed velit. Nunc ac efficitur libero.
        <br />
        ipsum ligula euismod arcu, dignissim molestie velit enim sed.
        <br />
        Ipsum ligula euismod arcu, dignissim molestie velit.
      </Description>

      <div className="callToAction__servicesContainer">
        <Service
          imgSrc={Softscape}
          alt={"Image for softscaping service."}
          titleText={"Softscape"}
          imgWidth={"85"}
          imgHeight={"160"}
        >
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Mauris aliquet, orci sit amet.
        </Service>

        <Service
          imgSrc={Lighting}
          alt={"Image for lighting service."}
          titleText={"Lighting"}
          imgWidth={"100"}
          imgHeight={"160"}
        >
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Mauris aliquet, orci sit amet.
        </Service>
      </div>
    </div>
  );
}
