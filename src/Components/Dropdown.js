import React, { memo, useState, createRef } from 'react';
import styled from 'styled-components';
import helpers from 'helpers';

import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { CardSecondary } from 'Components/Common';
import Menu from 'Components/Menu';

const Container = styled.div`
  z-index: 1;
  position: relative;
  border-color: transparent;
  transform: none;
  cursor: pointer;
  transform: none;

  text-align: ${(props) =>
    props.align ? props.align : 'center'};
`;

const ContentStyle = styled(CardSecondary)`
  text-align: left;
  position: absolute;
  font-size: 14px;
  top: 0px;
  border-radius: 5px;
  z-index: 1;
`;

const MenuContainer = styled.div`
  margin: 0.125rem 0 0;
  padding: 0.5rem 0;
  line-height: 1.5;
  min-width: 10rem;
  transform: none;
`;

const Content = styled(ContentStyle)`
  transform: ${(props) =>
    ({
      topRight: 'translate3d(12px, -143px, 0px)',
      bottomLeft: 'translate3d(-100px, 20px, 0px)',
    }[props.placement])};

  visibility: ${(props) =>
    props.isOpen ? 'visible' : 'hidden'};

  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

/**
 *
 * @component
 * @param {string}  id                       target id
 * @param {Object}  children                 child component
 * @param {String}  className                passed by styled-components or overwritten by user
 * @param {Array}   [overlay]                dropdown menu items array
 * @param {String | undefined} [align]       align item for parent div
 * @param {String | undefined} [placement]   menu component placement
 * @param {String | undefined} [top]         margin top in px
 * @param {String | undefined} [left]        margin left in px
 */

const DropDown = ({
  id,
  children,
  className,
  overlay,
  align,
  placement,
  top,
  left,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const ref = createRef();

  // outside click hook
  useOnClickOutside(ref, (data) => {
    if (data.includes('inside')) {
      isOpen && helpers.promisify(setIsOpen);
      disabled && setDisabled(true);
    }

    if (data.includes('outside')) {
      setIsOpen(false);
    }
  });

  return (
    <Container align={align} className={className}>
      <div
        aria-label={className}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </div>

      <Content
        placement={placement}
        isOpen={isOpen}
        top={top}
        left={left}
      >
        <MenuContainer ref={ref}>
          <Menu>
            <>
              {overlay.map(({ name, toggle, divider }) => (
                <span key={`${name}${id}`}>
                  <Menu.Item
                    onClick={(cnt) => toggle(cnt, id)}
                  >
                    <span>{name}</span>
                  </Menu.Item>
                  {divider && <Menu.Divider />}
                </span>
              ))}
            </>
          </Menu>
        </MenuContainer>
      </Content>
    </Container>
  );
};

export default memo(DropDown);
