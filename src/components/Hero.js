import React from "react";
import { TitleText, Button } from "./molecules";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__heroTextContainer">
        <TitleText textStyle={"hero__titleText"}>Downunder Landscape</TitleText>
        <TitleText textStyle={"hero__subtitleText"}>
          Making backyard dreams come true for over
          <br></br>
          30 years in Orange County.
        </TitleText>
        <Button
          buttonStyle={"button--contactUs"}
          containerStyle={"button__buttonContainer--center"}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
