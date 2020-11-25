import React, { Component } from "react";
import { PageTitle } from "./PageTitle";
import House from "./House";
import styled from "styled-components";
import { houses } from "./houseData";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <PageTitle>Our Work</PageTitle>
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
      </div>
    );
  }
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  flex-wrap: wrap;
`;
