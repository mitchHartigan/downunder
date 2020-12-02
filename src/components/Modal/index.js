import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";
import Slider from "infinite-react-carousel";

export default class Modal extends Component {
  hideModal = () => {
    const defaultHouseObj = {
      name: "",
      description: "",
      images: [""],
      thumbnail: "",
    };
    this.props.toggleModal(defaultHouseObj);
  };

  render() {
    const { show, house } = this.props;

    return (
      <BlurContainer show={show}>
        <HouseContainer>
          <House show={show}>
            <ExitButtonContainer>
              <ExitButton onClick={this.hideModal}>
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
              {house.images.map((source) => {
                return <Image source={source} key={Math.random()} />;
              })}
            </Slider>

            <PageTitle
              additionalStyles={"margin-top: -20px; margin-bottom: 20px;"}
            >
              {house.name}
            </PageTitle>
            <HouseDescription>{house.description}</HouseDescription>
          </House>
        </HouseContainer>
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

const House = styled.div`
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

const HouseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HouseDescription = styled.p`
  font-family: Roboto;
  font-weight: 400;
  line-height: 45px;
  text-align: left;
  font-size: 14pt;
`;

const Image = styled.div`
  width: 50vw;
  height: 70vh;
  background-image: url(${(props) => props.source});
  background-position: center;
  outline: none;
  background-size: cover;
`;
