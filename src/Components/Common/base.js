import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
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

export const BtnSelect = styled.span`
  display: flex;
  justify-content: center;
  border-radius: 7px;
  transition: all 0.23s;
  padding: 0.9rem;
  position: relative;
  cursor: pointer;
`;

export const BtnSimple = styled.button`
  display: inline-flex;
  padding: 9px 14px;
  background: transparent;
  border-radius: 0.25rem;
  border-width: 1px;
  font-size: 14px;
  width: auto;
  line-height: 14px;
  cursor: pointer;
  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

export const BadgeBase = styled.span`
  position: absolute;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  top: 10px;
  right: 10px;
`;

export const TextBase = styled.span`
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
`;

export const InputBase = styled.input`
  outline: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  background: transparent;
  font-size: 15px;
  font-weight: 300;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

export const SmallStyle = styled.small`
  font-size: 11px;
  font-weight: 400;
  position: relative;
`;

export const CountBase = styled.div`
  width: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  font-size: 13px;
  font-weight: 400;
  height: 23px;
  color: white;
  border-radius: 50%;
  margin-left: auto;
`;
