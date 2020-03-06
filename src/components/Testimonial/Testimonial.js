import React from "react";
import { Quote } from "./quote";

export function Testimonial(props) {
  let quoteArr = [
    <Quote author="John Wick">Here is the text of the quote!</Quote>,
    <Quote author="John Wick">Here is the text of the quote!</Quote>
  ];

  return (
    <div>
      {quoteArr.map(quote => {
        return quote;
      })}
    </div>
  );
}
