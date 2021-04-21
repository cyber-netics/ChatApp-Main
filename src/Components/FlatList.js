import React from "react";
import styled from "styled-components";
import { List, ListItem } from "../Components/Shared";

const NavList = styled(List)`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled(ListItem)`
  margin: 5px 20px;
`;

const FlatList = (props) => {
  return (
    <NavList>
      {props.list.map((item, indx) => {
        return <NavItem key={indx}>{props.item(item)}</NavItem>;
      })}
    </NavList>
  );
};

export default FlatList;
