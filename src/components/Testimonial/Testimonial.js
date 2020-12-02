import React from "react";
import { Quote } from "./quote";
import Slider from "infinite-react-carousel";
import { PageTitle } from "../Gallery/PageTitle";

export function Testimonial(props) {
  return (
    <div className="testimonial">
      <PageTitle white={true}>Our Customers</PageTitle>
      <Slider
        className="testimonial__carousel"
        dots
        arrows={false}
        autoplay
        autoplaySpeed={10000}
        pauseOnHover
        duration={300}
      >
        <Quote author="John W">
          During their work here, Michael and his crew were very professional -
          working hard every day, performing high quality work, leaving no mess
          behind, and keeping open lines of communication. We will definitely be
          looking to contact Michael again when we are ready to focus on more of
          the softscape work to be done. Highly recommended.
        </Quote>
        <Quote author="Jalene B">
          Michael and his crew are the best around! As a new resident of the OC
          we purchased a fixer upper with a great view. The final phase was the
          yard, the sprinklers were non working for at lease 2 years and all the
          plants were dead or dying. The access to the back patio was ugly and
          dangerous. Michael put in beautiful stairs and even helped us convert
          an empty crawl space to a great much needed storage area. The crew is
          professional and always kept things clean and organized. Great at what
          they do and very nice people as well!
        </Quote>
      </Slider>
    </div>
  );
}
