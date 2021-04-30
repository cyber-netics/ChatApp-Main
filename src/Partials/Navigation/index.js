import React from 'react';
import styled from 'styled-components';

import { ReactComponent as logo } from 'assets/logo.svg';
import TabPanel from './Tabs';
import Link from 'Components/Link';
import Icon from 'Components/Icon';
import Avatar from 'Components/Avatar';
import Dropdown from 'Components/Dropdown';
import Menu from 'Components/Menu';
import Tooltip from 'Components/Tooltip';

import {
  Container as Wrapper,
  InnerContainer,
  List,
  ListItem,
} from 'Components/Common';

import {
  Section,
  ButtonSelect,
} from 'Components/SharedStyles';

const Container = styled(Wrapper)`
  width: 100px;
  text-align: center;
`;

const NavHeader = styled.div`
  padding: 25px 0;
`;

const NavLogo = styled(Link)`
  height: 100%;
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
  return (
    <Section>
      <Container>
        <InnerContainer>
          <NavHeader>
            <NavLogo to={'/'}>
              <LogoIcon />
            </NavLogo>
          </NavHeader>
          <NavBody>
            <NavList>
              <TabPanel
                selected={props.activeNavTab}
                toggle={props.toggleNavTab}
              />
            </NavList>
          </NavBody>
          <NavFooter>
            <NavList>
              <NavItem>
                <Tooltip
                  placement="right"
                  title="Dark Mode"
                >
                  <ButtonSelect
                    onClick={props.toggleTheme}
                  >
                    <Icon icon={'Moon'} />
                  </ButtonSelect>
                </Tooltip>
              </NavItem>
              <NavItem>
                <Tooltip
                  placement="right"
                  title="User Menu"
                >
                  <Dropdown
                    placement={'topRight'}
                    overlay={() => (
                      <Menu>
                        <Menu.Item>
                          Edit profile
                        </Menu.Item>
                        <Menu.Item>Profile</Menu.Item>
                        <Menu.Item>Settings</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item>Logout</Menu.Item>
                      </Menu>
                    )}
                  >
                    <Avatar />
                  </Dropdown>
                </Tooltip>
              </NavItem>
            </NavList>
          </NavFooter>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Navigation;
