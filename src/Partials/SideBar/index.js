import React, { memo } from 'react';
import styled from 'styled-components';

import Icon from 'Components/Icon';
import Tooltip from 'Components/Tooltip';
import { ButtonSimple } from 'Components/Button';
import UserList from './UserList';

import {
  Container as Wrapper,
  InnerContainer,
  List,
  ListItem,
} from 'Components/Common';

import {
  Section,
  TextSecondary,
  Input,
} from 'Components/Common/styled';

const Container = styled(Wrapper)`
  width: 350px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 80px;
  font-weight: 500;
`;

const Title = styled(TextSecondary)`
  font-size: 22px;
  font-weight: 600;
`;

const ButtonList = styled(List)`
  display: flex;
`;

const ButtonItem = styled(ListItem)`
  margin-left: 0.5rem;
`;

const Form = styled.form`
  display: block;
  padding: 17px 30px;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const SearchBox = styled.div`
  dispay: inline-box;
  position: relative;
  width: 100%;
  height: 5.75rem;
`;

const SearchInput = styled(Input)`
  padding: 11.5px 15px;
`;

const SidebarBody = styled.div`
  position: relative;
  overflow: scroll;
  height: calc(100% - 180px);
`;

const Sidebar = ({
  data,
  activeTab,
  apiHandlers,
  toggleDrawer,
}) => (
  <Section>
    <Container>
      <InnerContainer>
        <Header>
          <Title>Chats</Title>
          <div>
            <ButtonList>
              <ButtonItem>
                <Tooltip
                  placement="bottom"
                  title="Add Group"
                >
                  <ButtonSimple>
                    <Icon size="sm" icon={'users'} />
                  </ButtonSimple>
                </Tooltip>
              </ButtonItem>
              <ButtonItem>
                <Tooltip
                  placement="bottom"
                  title="New Chat"
                >
                  <ButtonSimple>
                    <Icon
                      size="sm"
                      icon={'plusCircle'}
                    />
                  </ButtonSimple>
                </Tooltip>
              </ButtonItem>
            </ButtonList>
          </div>
        </Header>
        <SearchBox>
          <Form>
            <SearchInput
              onChange={() => {}}
              placeholder="Search chats"
            />
          </Form>
        </SearchBox>
        <SidebarBody>
          {(activeTab === 'chat' || 'users') && (
            <UserList
              handleFetch={apiHandlers.getMessage}
              activeTab={activeTab}
              data={data}
              menu={[
                {
                  name: 'Profile',
                  toggle: (cnt) =>
                    toggleDrawer(true, cnt),
                },
                {
                  name: 'Delete',
                  toggle: () => console.log(),
                },
              ]}
            />
          )}
        </SidebarBody>
      </InnerContainer>
    </Container>
  </Section>
);

export default memo(Sidebar);
