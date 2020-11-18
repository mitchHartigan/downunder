import React, { Component } from "react";
import Header from "./Header";
import Hero from "./Hero";
import { Testimonial } from "./Testimonial/Testimonial";
import Gallery from "./Gallery/index";
import Modal from "./Modal/index";

// Is this component useless? Can't we just add everything in App.js?

export class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      property: null,
    };
  }

  toggleModal = (property) => {
    this.setState({ showModal: !this.state.showModal, property: property });
  };

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Testimonial />
        <Modal show={this.state.showModal} toggleModal={this.toggleModal} />
        <Gallery toggleModal={this.toggleModal} />
      </div>
    );
  }
}
