import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as logo } from '../../assets/logo.svg';
import { tabs } from './tabs.json';
import { ButtonSelect, Badge } from '../SharedStyles';
import {
  Section,
  Container as Wrapper,
} from '../Shared';

import Icon from '../Icon';
import Dropdown from '../Dropdown';

const Container = styled(Wrapper)`
  width: 100px;
  text-align: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const NavLogo = styled.a`
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const LogoIcon = styled(logo)`
  width: 30px;
  height: 30px;
  fill: #0a80ff;
  padding-top: 1px;
`;

const NavBody = styled.div``;

const NavFooter = styled.div`
  margin-top: auto;
  padding-bottom: 1rem;
`;

const NavList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TabPanel = (props) => {
  return props.list.map(({ name, icon, status }) => (
    <NavItem>
      <ButtonSelect
        key={name}
        active={props.selected === name}
      >
        <Icon icon={icon} />
        <Badge status={status} />
      </ButtonSelect>
    </NavItem>
  ));
};

const Navigation = (props) => {
  const [navtab, setnavtab] = useState('message');

  return (
    <Section>
      <Container>
        <InnerContainer>
          <NavLogo href={'/'}>
            <LogoIcon />
          </NavLogo>
          <NavBody>
            <NavList>
              <TabPanel
                list={tabs}
                selected={navtab}
                toggle={setnavtab}
              />
            </NavList>
          </NavBody>
          <NavFooter>
            <NavList>
              <NavItem>
                <ButtonSelect>
                  <Icon icon={'Moon'} />
                </ButtonSelect>
              </NavItem>
              <NavItem>
                <Dropdown />
              </NavItem>
            </NavList>
          </NavFooter>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Navigation;
