import React from 'react';
import styled from 'styled-components';
import { List } from 'Components/Common';
import {
  ListItemHighlight,
  Divider,
} from 'Components/Common';

const MenuItem = styled(ListItemHighlight)`
  padding: 0.25rem 1.5rem;
  cursor: pointer;
`;

const MenuComponent = (props) => {
  return <List>{props.children}</List>;
};

const ItemMenuComponent = (props) => {
  return (
    <MenuItem>
      <span>{props.children}</span>
    </MenuItem>
  );
};

MenuComponent.Item = ItemMenuComponent;
MenuComponent.Divider = Divider;
export default MenuComponent;
