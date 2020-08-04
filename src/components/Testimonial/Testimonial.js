import React from "react";
import { Quote } from "./quote";
import Slider from "infinite-react-carousel";

export function Testimonial(props) {
  return (
    <div className="testimonial">
      <Slider className="testimonial__carousel" dots>
        <>
          <Quote author="John Wick">
            During their work here, Michael and his crew were very professional
            - working hard every day, performing high quality work, leaving no
            mess behind, and keeping open lines of communication. We will
            definitely be looking to contact Michael again when we are ready to
            focus on more of the softscape work to be done. Highly recommended.
          </Quote>
        </>
        <>
          <Quote author="John Wick">
            During their work here, Michael and his crew were very professional
            - working hard every day, performing high quality work, leaving no
            mess behind, and keeping open lines of communication. We will
            definitely be looking to contact Michael again when we are ready to
            focus on more of the softscape work to be done. Highly recommended.
          </Quote>
        </>
      </Slider>
    </div>
  );
}
