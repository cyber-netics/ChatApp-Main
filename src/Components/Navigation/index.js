import React from "react";
import styled from "styled-components";
import { Section } from "../Shared";

const Container = styled.div`
  width: 100px;
`;

const Navigation = () => {
  return (
    <Section>
      <Container>
        <h1>Hello</h1>
      </Container>
    </Section>
  );
};

export default Navigation;
