import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Text>
        Copyright © 2020 Downunder Landscape Inc. · All Rights Reserved ·
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 4vh;
  background-color: #6aaf08;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 12pt;
  color: white;
  text-align: left;
  margin-left: 6vw;
`;
