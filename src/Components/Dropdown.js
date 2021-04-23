import React, { useState, createRef } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { CardSecondary } from './SharedStyles';

const Container = styled.div`
  position: relative;
  border-color: transparent;
`;

const Content = styled(CardSecondary)`
  display: ${(props) =>
    props.isOpen ? 'block' : 'none'};
  text-align: left;
  transform: translate3d(12px, -145px, 0px);
  position: absolute;
  font-size: 14px;
  top: 0px;
  border-radius: 5px;
`;

const InnerContainer = styled.div`
  margin: 0.125rem 0 0;
  padding: 0.5rem 0;
  line-height: 1.5;
  min-width: 10rem;
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
    <Container>
      <button ref={ref} onClick={toggle}>
        {props.children}
      </button>
      <Content
        isOpen={isOpen}
        className={props.className}
      >
        <InnerContainer>
          {props.overlay()}
        </InnerContainer>
      </Content>
    </Container>
  );
};

export default DropDown;
