import React, { createRef } from 'react';
import styled from 'styled-components';
import { List } from 'Components/Common';
import {
  ListItemHighlight,
  BorderSecondary,
} from 'Components/Common';

const MenuItem = styled(ListItemHighlight)`
  padding: 0.25rem 1.5rem;
  cursor: pointer;
  font-weight: 400;
`;

const Divider = styled(BorderSecondary)`
  border-width: 1px;
  border-style: solid;
  margin: 0.4rem 0;
`;

const MenuComponent = ({ children }) => {
  return <List>{children}</List>;
};

const ItemMenuComponent = ({ children, onClick }) => {
  return (
    <MenuItem
      onClick={() => onClick(children.props.children)}
    >
      <span>{children}</span>
    </MenuItem>
  );
};

MenuComponent.Item = ItemMenuComponent;
MenuComponent.Divider = Divider;
export default MenuComponent;
