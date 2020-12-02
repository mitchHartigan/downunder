import React from "react";
import styled from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";

export default function ServiceArea() {
  return (
    <Container>
      <PageTitle titleStyles="font-weight: bold">Our Service Area</PageTitle>
      <Image src="service_area.svg" alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 1px 3px 10px 3px #ababab;
`;
