import React, { Component } from "react";
import { PageTitle } from "./PageTitle";
import Property from "./Property";
import styled from "styled-components";

export default class Gallery extends Component {
  render() {
    const properties = [
      {
        name: "Calle Brisa",
        description: "this is where the description will go",
      },
      {
        name: "Cale ",
        description: "this is where the description will go",
      },
      {
        name: "Bill",
        description: "yea",
      },
    ];
    return (
      <div>
        <PageTitle>Our Work</PageTitle>
        <ProjectContainer>
          {properties.map((property) => {
            return (
              <Property
                key={property.name}
                property={property}
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
