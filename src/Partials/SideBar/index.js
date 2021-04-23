import React from 'react';
import styled from 'styled-components';
import { Section } from '../../Components/SharedStyles';

const Container = styled.div`
  width: 350px;
`;

const Sidebar = () => {
  return (
    <Section>
      <Container>
        <h1>Section 2</h1>
      </Container>
    </Section>
  );
};

export default Sidebar;
