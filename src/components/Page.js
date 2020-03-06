import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { CallToAction } from "./CallToAction/CallToAction";
import { Testimonial } from "./Testimonial/Testimonial";

export function Page(props) {
  return (
    <div>
      <Header />
      <Hero />
      <CallToAction />
      <Testimonial />
    </div>
  );
}
