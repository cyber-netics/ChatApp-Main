import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.highlight};
  position: relative;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;
