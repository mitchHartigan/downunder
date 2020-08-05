import React from "react";

export function Quote(props) {
  return (
    <div>
      <p className="testimonial__text">{props.children}</p>
      <p className="testimonial__text">- {props.author}</p>
    </div>
  );
}
