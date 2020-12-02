import React, { Component } from "react";
import { PageTitle } from "./PageTitle";
import House from "./House";
import styled from "styled-components";
import { houses } from "./houseData";

export default class Gallery extends Component {
  render() {
    return (
      <Container>
        <PageTitle titleStyles="font-weight: bold">Our Work</PageTitle>
        <ProjectContainer>
          {houses.map(house => {
            return (
              <House
                key={house.name}
                house={house}
                toggleModal={this.props.toggleModal}
              />
            );
          })}
        </ProjectContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 30px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  flex-wrap: wrap;
  padding: 0vh 1vw 0vh 1vw;
  margin-top: 20px;
  margin-bottom: 50px;
`;
