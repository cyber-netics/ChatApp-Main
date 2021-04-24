import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Button = styled.button`
  border: 1px solid
    ${(props) => props.theme.colors.borderColor};
  background: none;
  border-radius: 0.25rem;
  border-width: 1px;

  font-size: 14px;
  width: auto;
  display: inline-flex;
  padding: 8px 12px;
  line-height: 14px;
  outline: none;

  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &: focus {
    border-width: 1px;
    border-color: rgb(133, 133, 133);
    box-shadow: rgb(133, 133, 133);
  }

  &: hover {
    background-color: ${(props) =>
      props.theme.colors.borderColor};
  }
`;

const ButtonComponent = (props) => (
  <Button
    className={props.className}
    onClick={props.handleClick}
  >
    <Icon {...props} />
  </Button>
);

export default ButtonComponent;
