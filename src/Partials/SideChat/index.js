import React from "react";
import styled from "styled-components";
import { Section } from "../../Components/Shared";

const Container = styled(Section)`
  width: 100%;
`;

const Chat = () => {
  return (
    <Container>
      <h1>Section 3</h1>
    </Container>
  );
};

export default Chat;
