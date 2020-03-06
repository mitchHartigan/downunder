import React from "react";

export function NavLink(props) {
  return <button className="navBar__navLink">{props.children}</button>;
}

export function Logo(props) {
  return (
    <div className="navBar__logoContainer">
      <img src={props.logoSrc} alt="Downunder Landscape logo"></img>
    </div>
  );
}

export function TitleText(props) {
  return <h1 className={props.textStyle}>{props.children}</h1>;
}

export function Button(props) {
  return (
    <div className={props.containerStyle}>
      <button className={props.buttonStyle}>{props.children}</button>
    </div>
  );
}

export function Service(props) {
  return (
    <div className="callToAction__service">
      <div>
        <img
          src={props.imgSrc}
          alt={props.alt}
          width={props.imgWidth}
          height={props.imgHeight}
        />
      </div>
      <h1 className="callToAction__service__titleText">{props.titleText}</h1>
      <p className="callToAction__service__descriptionText">{props.children}</p>
    </div>
  );
}

export function Image(props) {
  return (
    <img
      className="img__responsive"
      src={props.imgSrc}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}
