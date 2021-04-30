import React from 'react';
import styled from 'styled-components';

import UserFigure from 'Components/UserFigure';
import Button from 'Components/Button';
import Tooltip from 'Components/Tooltip';
import Dropdown from 'Components/Dropdown';
import Menu from 'Components/Menu';

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

// **
const HeaderAction = styled.div``;

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
          <Tooltip placement="bottom" title="Voice Call">
            <ButtonAction
              icon={'phone'}
              color={'#28a745'}
            />
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip placement="bottom" title="Video call">
            <ButtonAction
              icon={'video'}
              color={'#ffb822'}
            />
          </Tooltip>
        </ListItem>
        <ListItem>
          <Dropdown
            placement={'bottomLeft'}
            top="20px"
            left="-20px"
            overlay={() => (
              <Menu>
                <Menu.Item>Add to group</Menu.Item>
                <Menu.Item>Profile</Menu.Item>
              </Menu>
            )}
          >
            <ButtonAction icon={'moreHorizontal'} />
          </Dropdown>
        </ListItem>
      </ListAction>
    </HeaderAction>
  </Container>
);

export default Header;
