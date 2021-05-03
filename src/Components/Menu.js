import React from 'react';
import styled from 'styled-components';
import { List } from 'Components/Common';
import {
  ListItemHighlight,
  BorderSecondary,
} from 'Components/Common';

const MenuItem = styled(ListItemHighlight)`
  padding: 0.25rem 1.5rem;
  cursor: pointer;
`;

const MenuComponent = (props) => {
  return <List>{props.children}</List>;
};

const Divider = styled(BorderSecondary)`
  border-width: 1px;
  border-style: solid;
  margin: 0.4rem 0;
`;

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
