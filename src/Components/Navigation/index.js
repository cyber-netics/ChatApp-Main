import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as logo } from '../../assets/logo.svg';
import { tabs } from './tabs.json';

import Icon from '../Icon';
import DropDown from '../Dropdown';
import TabPanel from './TabPanel';

import { ButtonSelect } from '../SharedStyles';
import {
  Section,
  Container as Wrapper,
  InnerContainer,
  List,
  ListItem,
} from '../Shared';

const Container = styled(Wrapper)`
  width: 100px;
  text-align: center;
`;

const NavHeader = styled.div`
  padding: 25px 0;
`;

const NavLogo = styled.a`
  height: 80px;
`;

const LogoIcon = styled(logo)`
  width: 30px;
  height: 30px;
  fill: #0a80ff;
`;

const NavBody = styled.div`
  margin-top: 0.75rem;
`;

const NavFooter = styled.div`
  margin-top: auto;
  padding-bottom: 1rem;
`;

const NavList = styled(List)`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled(ListItem)`
  margin: 1.5rem 20px 0;
`;

const Navigation = (props) => {
  const [navtab, setnavtab] = useState('message');

  return (
    <Section>
      <Container>
        <InnerContainer>
          <NavHeader>
            <NavLogo href={'/'}>
              <LogoIcon />
            </NavLogo>
          </NavHeader>
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
                <ButtonSelect
                  onClick={props.toggleTheme}
                >
                  <Icon icon={'Moon'} />
                </ButtonSelect>
              </NavItem>
              <NavItem>
                <DropDown />
              </NavItem>
            </NavList>
          </NavFooter>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Navigation;
