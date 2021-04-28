import React, { memo } from 'react';
import styled from 'styled-components';
import Icon from '../../Components/Icon';
import UserList from './UserList';

import {
  Container as Wrapper,
  InnerContainer,
  List,
  ListItem,
} from '../../Components/Common';

import {
  Section,
  TextSecondary,
  ButtonSimple,
  Input,
} from '../../Components/SharedStyles';

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

const Button = styled(ButtonSimple)`
  padding: 8px 14px;
`;

const Form = styled.form`
  display: block;
  padding: 17px 30px;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const SearchContainer = styled.div`
  dispay: inline-box;
  position: relative;
  width: 100%;
  height: 98px;
`;

const SearchInput = styled(Input)`
  padding: 11.5px 15px;
`;

const SidebarBody = styled.div`
  position: relative;
  overflow: scroll;
  height: calc(100% - 180px);
`;

const Sidebar = (props) => {
  return (
    <Section>
      <Container>
        <InnerContainer>
          <Header>
            <Title>Chats</Title>
            <div>
              <ButtonList>
                <ButtonItem>
                  <Button>
                    <Icon size="sm" icon={'Users'} />
                  </Button>
                </ButtonItem>
                <ButtonItem>
                  <Button>
                    <Icon
                      size="sm"
                      icon={'PlusCircle'}
                    />
                  </Button>
                </ButtonItem>
              </ButtonList>
            </div>
          </Header>
          <SearchContainer>
            <Form>
              <SearchInput placeholder="Search chats" />
            </Form>
          </SearchContainer>
          <SidebarBody>
            {props.active === 'message' && (
              <UserList
                data={props.chats}
                handleSelect={()=>{console.log('select')}}
              />
            )}
          </SidebarBody>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default memo(Sidebar);
