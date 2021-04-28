import React from 'react';
import * as FeatherIcon from 'react-feather';

const iconSize = {
  sm: {
    height: '16px',
    width: '16px',
  },
  md: {
    height: '19px',
    width: '19px',
  },
  lg: {
    hight: '24px',
    width: '24px',
  },
};

const uppercase = (string) => {
  return (
    string.charAt(0).toUpperCase() + string.slice(1)
  );
};

const Icon = (props) => {
  const { icon, size } = props;

  const IconComponent = FeatherIcon[uppercase(icon)];
  const sizeIcon = size
    ? iconSize[size]
    : iconSize['md'];

  return (
    <IconComponent
      color={props.color}
      style={sizeIcon}
    />
  );
};

export default Icon;
