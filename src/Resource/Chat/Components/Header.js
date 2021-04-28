import React from 'react';
import styled from 'styled-components';

import UserFigure from 'Components/UserFigure';
import Button from 'Components/Button';

import { List } from 'Components/Common';
import {
  Small,
  BorderBox,
} from 'Components/SharedStyles';

const Container = styled(BorderBox)`
  display: flex;
  justify-content: space-between;
  padding: 16px 30px;
`;

const HeaderUser = styled.div`
  display: flex;
  align-items: center;
`;

// **
const HeaderAction = styled.div``;

const ListAction = styled(List)`
  padding-left: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin: 0 0 0.5rem 0.5rem;
`;

const ButtonAction = styled(Button)`
  padding: 8px 12.5px;
`;

const Header = ({ user }) => (
  <Container>
    <HeaderUser>
      <UserFigure
        name={user.name}
        avatar={user.avatar}
        text={<Small>{'5 minutes ago'}</Small>}
        status={user.status}
      />
    </HeaderUser>
    <HeaderAction>
      <ListAction>
        <ListItem>
          <ButtonAction
            icon={'phone'}
            color={'#28a745'}
          />
        </ListItem>
        <ListItem>
          <ButtonAction
            icon={'video'}
            color={'#ffb822'}
          />
        </ListItem>
        <ListItem>
          <ButtonAction icon={'moreHorizontal'} />
        </ListItem>
      </ListAction>
    </HeaderAction>
  </Container>
);

export default Header;
