import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";
import Slider from "infinite-react-carousel";

export default class Modal extends Component {
  render() {
    const { toggleModal, show } = this.props;

    return (
      <BlurContainer show={show}>
        <PropertyContainer>
          <Property show={show}>
            <ExitButtonContainer>
              <ExitButton onClick={toggleModal}>
                {"< Back to Gallery"}
              </ExitButton>
            </ExitButtonContainer>

            <Slider
              dots
              autoplay
              arrows={false}
              autoplaySpeed={6000}
              duration={300}
            >
              <Image></Image>
              <Image></Image>
            </Slider>
            <PageTitle
              additionalStyles={"margin-top: -20px; margin-bottom: 20px;"}
            >
              Title of the Property
            </PageTitle>
            <PropertyDescription>
              Here is the text. During their work here, Michael and his crew
              were very professional - working hard every day, performing high
              quality work, leaving no mess behind, and keeping open lines of
              communication. We will definitely be looking to contact Michael
              again when we are ready to focus on more of the softscape work to
              be done. Highly recommended. During their work here, Michael and
              his crew were very professional - working hard every day,
              performing high quality work, leaving no mess behind, and keeping
              open lines of communication. We will definitely be looking to
              contact Michael again when we are ready to focus on more of the
              softscape work to be done. Highly recommended. During their work
              here, Michael and his crew were very professional - working hard
              every day, performing high quality work, leaving no mess behind,
              and keeping open lines of communication. We will definitely be
              looking to contact Michael again when we are ready to focus on
              more of the softscape work to be done. Highly recommended.
            </PropertyDescription>
          </Property>
        </PropertyContainer>
      </BlurContainer>
    );
  }
}

const ExitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ExitButton = styled.button`
  margin-bottom: 30px;
  margin-left: -40px;
  border: none;
  padding: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;
  font-family: Cardo;
  font-weight: 500;
  font-size: 22px;
  text-shadow: none;

  &:hover {
    text-shadow: 1px 1px 1px lightgray;
    transition: text-shadow 150ms ease;
  }
`;

const BlurContainer = styled.div`
  width: 100%;
  position: absolute;
  backdrop-filter: blur(4px);
  z-index: 10;
  display: ${(props) => (props.show ? "auto" : "none")};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Property = styled.div`
  width: 70vw;
  padding: 30px 80px 30px 80px;
  margin-top: 5vh;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px gray;
  opacity: ${(props) => (props.show ? "1" : "0")};
  animation: ${fadeIn} 300ms ease-in;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PropertyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PropertyDescription = styled.p`
  white-space: pre-wrap;
  font-family: Roboto;
  font-weight: 400;
  line-height: 45px;
`;

const Image = styled.div`
  width: 50vw;
  height: 50vh;
  background-image: url("home-design.jpg");
  background-position: center;
  outline: none;
`;
