import React from "react";
import { Button } from "../molecules";

export function Description(props) {
  return (
    <div className="callToAction__descriptionContainer">
      <h1 className="callToAction__descriptionContainer__titleText">
        {props.title}
      </h1>
      <span className="textLine"></span>
      <p className="callToAction__descriptionContainer__descriptionText">
        {props.children}
      </p>
      <Button
        containerStyle={"button__buttonContainer--left"}
        buttonStyle={"button--green"}
      >
        {props.buttonText}
      </Button>
    </div>
  );
}
