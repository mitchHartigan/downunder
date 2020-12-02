import React from "react";
import styled from "styled-components";
import { PageTitle } from "../Gallery/PageTitle";

export default function ContactUs() {
  return (
    <Container id="contact-us">
      <ContactInfoRow>
        <Contact>
          <PageTitle titleStyles="font-weight: bold">Address</PageTitle>
          <ContactInfoDescription>
            PO Box 2516 Capistrano Beach,
          </ContactInfoDescription>
          <ContactInfoDescription>California 92624</ContactInfoDescription>
        </Contact>
        <Contact>
          <PageTitle titleStyles="font-weight: bold">Business Hours</PageTitle>
          <ContactInfoDescription>
            Monday - Friday | 9:00 - 5:30
          </ContactInfoDescription>

          <ContactInfoDescription>
            Saturday | 9:00 - 12:30
          </ContactInfoDescription>

          <ContactInfoDescription>Sunday | Closed </ContactInfoDescription>
        </Contact>
        <Contact>
          <PageTitle titleStyles="font-weight: bold">Contact Info</PageTitle>
          <ContactInfoDescription>Phone | 949 248 3171</ContactInfoDescription>

          <ContactInfoDescription>
            Email | hi@downunderlandscape.com
          </ContactInfoDescription>

          <ContactInfoDescription>Sunday | Closed </ContactInfoDescription>
        </Contact>
      </ContactInfoRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 25vh;
  padding: 50px 14vw 80px 14vw;
`;

const ContactInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInfoDescription = styled.p`
  font-family: Roboto;
  font-size: 14pt;
  margin: 8px 0px 8px 0px;
`;
