import React from "react";
import styled from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";

export default function Why() {
  return (
    <Container>
      <PageTitle titleStyles="font-weight: bold;">
        Why Choose Downunder?
      </PageTitle>

      <ReasonsConatainer>
        <Reason>
          <ReasonTitle>600+</ReasonTitle>

          <ReasonDescription>
            Residential landscape projects completed in Orange County.
          </ReasonDescription>
        </Reason>

        <Reason>
          <Ribbon src="ribbon.svg" alt="" />
          <ReasonDescription>
            Winner of the Landscaping Super Service award from Angies List.
          </ReasonDescription>
        </Reason>

        <Reason>
          <ReasonTitle>35+</ReasonTitle>
          <ReasonDescription>
            Years of experience in the landscaping industry.
          </ReasonDescription>
        </Reason>
      </ReasonsConatainer>
    </Container>
  );
}

const ReasonsConatainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
`;

const Reason = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReasonTitle = styled.h2`
  font-family: Cardo;
  font-size: 65pt;
  color: #6aaf08;
  margin: 0px;
  text-align: center;
`;

const ReasonDescription = styled.p`
  font-family: Roboto;
  font-size: 16pt;
  text-align: center;
  max-width: 20vw;
  margin: 0px;
  line-height: 30px;
`;

const Ribbon = styled.img`
  margin-top: -10px;
  margin-bottom: 10px;
`;
