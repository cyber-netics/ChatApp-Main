import React, { memo } from 'react';
import styled from 'styled-components';
import Icon from 'Components/Icon';
import { ButtonSimple } from 'Components/Common';

const Button = styled(ButtonSimple)`
  background: none;
  border-radius: 0.25rem;
  border-width: 1px;

  font-size: 14px;
  width: auto;
  display: inline-flex;
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
`;

/**
 *
 * @component
 * @param {Function} onClick  onClick handler function
 * @param {String} icon       button icon
 * @param {String} [color]    color code
 * @param {String} [size]     sm | md | lg options
 */

const ButtonComponent = ({
  onClick,
  className,
  icon,
  color,
  size,
}) => (
  <Button className={className} onClick={onClick}>
    <Icon icon={icon} color={color} size={size} />
  </Button>
);

export default memo(ButtonComponent);
