import React from "react";

/**
 *
 * @param {string} children - The text to be displayed in the quote.
 * @param {string} author - The author of the quote.
 */

export function Quote(props) {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.children}</p>
    </div>
  );
}
