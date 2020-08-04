import React from "react";
/**
 *
 * @param {string} children - The text to be displayed in the quote.
 * @param {string} author - The author of the quote.
 */

export function Quote(props) {
  return (
    <div style={{ outline: "transparent" }}>
      <p className="testimonial__text">{props.children}</p>
      <p className="testimonial__text">- {props.author}</p>
    </div>
  );
}
