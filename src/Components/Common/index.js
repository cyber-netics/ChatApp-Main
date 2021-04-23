import styled from 'styled-components';

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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

export const ButtonBase = styled.span`
  display: flex;
  justify-content: center;
  border-radius: 7px;
  transition: all 0.23s;
  padding: 0.9rem;
  position: relative;
  cursor: pointer;
`;

export const BadgeBase = styled.span`
  position: absolute;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  top: 10px;
  right: 10px;
`;
