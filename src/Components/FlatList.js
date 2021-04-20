import React from "react";
import styled from "styled-components";
import { List, ListItem } from "../Components/Shared";

const NavItem = styled(ListItem)`
  margin: 8px 20px;
`;

const FlatList = (props) => {
  return (
    <>
      {props.list.map((item) => {
        return (
          <List>
            <NavItem>{props.item(item)}</NavItem>
          </List>
        );
      })}
    </>
  );
};

export default FlatList;
