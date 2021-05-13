import React, { memo } from 'react';
import * as FeatherIcon from 'react-feather';
import Helpers from 'helpers';

/**
 *
 * @component
 * @param {String} icon     icon name
 * @param {String} [size]   size in pixels
 * @param {String} [color]  color code
 * @param {String} [fill]   fill icon color
 */

const Icon = ({
  icon,
  size,
  color,
  fill,
  className,
}) => {
  const uppercase = Helpers.firstChartUppercase;

  const iconSize = {
    xs: {
      height: '12px',
      width: '12px',
    },
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
      className={className}
      color={color}
      fill={fill || 'none'}
      style={sizeIcon}
    />
  );
};

export default memo(Icon);
