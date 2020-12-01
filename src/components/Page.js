import React, { Component } from "react";
import Header from "./Header";
import Hero from "./Hero";
import { Testimonial } from "./Testimonial/Testimonial";
import Gallery from "./Gallery/index";
import Modal from "./Modal/index";
import ServicePreview from "./ServicePreview/index";
import Why from "./Why/index";
import AboutUs from "./AboutUs/index";
import OurServices from "./OurServices/index";

// Is this component useless? Can't we just add everything in App.js?

export class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      house: {
        images: [""],
      },
    };
  }

  toggleModal = (house) => {
    this.setState({ showModal: !this.state.showModal, house: house }, () => {});
  };

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <ServicePreview />
        <Testimonial />
        <Modal
          show={this.state.showModal}
          toggleModal={this.toggleModal}
          house={this.state.house}
        />
        <Gallery toggleModal={this.toggleModal} />
        <Why />
        <AboutUs />
        <OurServices />
      </div>
    );
  }
}
