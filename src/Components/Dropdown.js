import React, { useState, createRef } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { CardSecondary } from './SharedStyles';

const Container = styled.div`
  position: relative;
  border-color: transparent;
  transform: none;
  cursor: pointer;
  text-align: ${(props) =>
    props.align ? props.align : 'center'};
  transform: none;
`;

const position = {
  topRight: 'translate3d(12px, -143px, 0px)',
  bottomLeft: 'translate3d(-100px, 20px, 0px)',
};

const Content = styled(CardSecondary)`
  display: ${(props) =>
    props.isOpen ? 'block' : 'none'};
  text-align: left;
  transform: ${(props) => position[props.position]};
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

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = createRef();

  useOnClickOutside(ref, () => {
    if (isOpen) setIsOpen();
  });

  const toggle = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <Container
      align={props.align}
      className={props.className}
    >
      <div ref={ref} onClick={toggle}>
        {props.children}
      </div>
      <Content
        position={props.position}
        isOpen={isOpen}
      >
        <MenuContainer>
          {props.overlay && props.overlay()}
        </MenuContainer>
      </Content>
    </Container>
  );
};

export default DropDown;
