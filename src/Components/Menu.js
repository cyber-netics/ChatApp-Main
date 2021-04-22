import React from 'react';
import styled from 'styled-components';

const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 0.25rem 1.5rem;
`;

const MenuComponent = (props) => {
  return <Menu>{props.children}</Menu>;
};

const ItemMenuComponent = (props) => {
  return <Item>{props.children}</Item>;
};

MenuComponent.Item = ItemMenuComponent;
export default MenuComponent;
