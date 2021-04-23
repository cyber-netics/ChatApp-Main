import React from 'react';
import styled from 'styled-components';
import Menu from '../../Components/Menu';

const Divider = styled.hr`
  border-color: ${(props) =>
    props.theme.colors.highlightPrimary};
  border-top: 1px solid transparent;
`;

const DropMenu = () => (
  <Menu>
    <Menu.Item>Edit profile</Menu.Item>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Divider />
    <Menu.Item>Logout</Menu.Item>
  </Menu>
);

export default DropMenu;
