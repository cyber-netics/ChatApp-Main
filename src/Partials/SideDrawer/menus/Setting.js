import React from 'react';
import styled from 'styled-components';

import Switch from 'Components/Switch';
import Avatar from 'Components/Avatar';
import { List, ListItem } from 'Components/Common';

const Container = styled.div`
  z-index: 12;
`;

const Section = styled.div`
  margin: 0.5rem 0 3rem;
`;

const Title = styled.h2`
  display: flex !important;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
`;

const SectionTitle = styled(Title)`
  text-align: center;
  font-size: 19px;
`;

const NameTitle = styled(Title)`
  justify-content: center;
  font-size: 22px;
`;

const OptionItem = styled(ListItem)`
  text-align: start;
  padding: 0.6rem 1rem;
`;

const SettingsMenu = () => {
  return (
    <Container>
      <Section>
        <Avatar size="xl" />
        <NameTitle>Mirabelle Tow</NameTitle>
      </Section>

      <Section>
        <SectionTitle>Account</SectionTitle>
        <List>
          <OptionItem>
            <Switch label="Allow contacts" size="sm" />
          </OptionItem>
          
          <OptionItem>
            <Switch label="Private Profile" size="sm" />
          </OptionItem>

          <OptionItem>
            <Switch
              label="Two-step verification"
              size="sm"
            />
          </OptionItem>

          <OptionItem>
            <Switch label="Developer mode" size="sm" />
          </OptionItem>
        </List>
      </Section>
    </Container>
  );
};

export default SettingsMenu;
