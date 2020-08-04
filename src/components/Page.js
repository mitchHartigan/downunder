import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { CallToAction } from "./CallToAction/CallToAction";
import { Testimonial } from "./Testimonial/Testimonial";

// Is this component useless? Can't we just add everything in App.js?

export function Page() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <CallToAction /> */}
      <Testimonial />
    </div>
  );
}
