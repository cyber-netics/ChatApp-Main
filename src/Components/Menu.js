import React from 'react';
import styled from 'styled-components';
import { List } from './Common';
import { ListItemHighlight } from './SharedStyles';

const MenuItem = styled(ListItemHighlight)`
  padding: 0.25rem 1.5rem;
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
export default MenuComponent;
