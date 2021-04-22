import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';

const Divider = styled.hr`
  border-color: ${(props) =>
    props.theme.colors.highlightPrimary};
  border-top: 1px solid transparent;
`;

const DropMenu = () => (
  <Menu>
    <Menu.Item>
      <span>Edit profile</span>
    </Menu.Item>
    <Menu.Item>
      <span>Profile</span>
    </Menu.Item>
    <Menu.Item>
      <span>Settings</span>
    </Menu.Item>
    <Divider />
    <Menu.Item>
      <span>Logout</span>
    </Menu.Item>
  </Menu>
);

export default DropMenu;
