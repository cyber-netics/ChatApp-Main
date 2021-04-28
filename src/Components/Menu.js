import React from 'react';
import styled from 'styled-components';
import { List } from './Common';
import { ListItemHighlight } from './SharedStyles';

const MenuItem = styled(ListItemHighlight)`
  padding: 0.25rem 1.5rem;
  cursor: pointer;
`;

const Divider = styled.hr`
  border-color: ${(props) =>
    props.theme.colors.highlightPrimary};
  border-top: 1px solid transparent;
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
