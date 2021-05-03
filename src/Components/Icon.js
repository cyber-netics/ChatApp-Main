import React, { memo } from 'react';
import * as FeatherIcon from 'react-feather';
import Helpers from 'helpers';

/**
 *
 * @component
 * @param {Object} props
 * @param {String} props.icon icon name
 * @param {String} props.size size in pixels
 */

const Icon = (props) => {
  const { icon, size } = props;
  const uppercase = Helpers.firstChartUppercase;

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

export default memo(Icon);
