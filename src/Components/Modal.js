import React, { memo, useState } from 'react';
import styled from 'styled-components';
import {
  primary,
  smooth,
  background,
  fontSecondary,
} from 'Components/Common/colors';

const H3 = styled.h3`
  padding: 0.25rem;
`;

const Modal = styled.div`
  display: ${({ active }) =>
    active ? 'block' : 'none'};

  position: fixed;
  z-index: 100;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0 0 0 / 51%);
  backdrop-filter: blur(2px);
`;

const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  border-radius: 0.6rem;
  width: 35%;
`;

const Header = styled.header`
  display: flex;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  color: #fff;
  justify-content: space-between;
  padding: 0.25rem 1.5rem;
  background: ${primary};
`;

const Body = styled.div`
  padding: 20px;
  background: ${background};
  color: ${fontSecondary};
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const Close = styled.span`
  color: #fff;
  float: right;
  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
  padding: 0.15rem;
  padding-top: 0.3rem;

  width: 28px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  align-self: center;

  background: ${smooth};

  &:hover {
    opacity: 0.75;
  }
`;

const ModalComponent = memo(
  ({ active, title, close, children }) => {
    const [isActive, setActive] = useState(active);

    const handleClose = () => {
      setActive(false);
      close && close();
    };

    return (
      <Modal active={isActive}>
        <Content>
          <Header>
            <H3>{title}</H3>
            <Close onClick={handleClose}>&times;</Close>
          </Header>
          <Body>{children}</Body>
        </Content>
      </Modal>
    );
  },
);

export default ModalComponent;
