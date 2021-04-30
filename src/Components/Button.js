import React, { memo } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { ButtonSimple } from 'Components/SharedStyles';

const Button = styled(ButtonSimple)`
  background: none;
  border-radius: 0.25rem;
  border-width: 1px;

  font-size: 14px;
  width: auto;
  display: inline-flex;
  padding: 9px 14px;
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

const ButtonComponent = ({
  onClick,
  className,
  icon,
  color,
}) => (
  <Button className={className} onClick={onClick}>
    <Icon icon={icon} color={color} />
  </Button>
);

export default memo(ButtonComponent);
