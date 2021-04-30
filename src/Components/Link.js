import React, { memo } from 'react';
import styled from 'styled-components';

const LinkElem = styled.a`
  display: inline-block;
`;

const Link = ({ to, className, children }) => {
  const DOMAIN_PATTERN = /^(?:https?:)?[/]{2,}([^/]+)/;
  const isExternal = DOMAIN_PATTERN.test(to);

  return (
    <LinkElem
      className={className}
      href={to}
      target={isExternal ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      {children}
    </LinkElem>
  );
};

export default memo(Link);
