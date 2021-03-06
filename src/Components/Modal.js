import React, { memo, createRef } from 'react';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

import Icon from 'Components/Icon';
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

const ModalBase = styled.div`
  position: fixed;
  z-index: 100;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Modal = styled(ModalBase)`
  visibility: ${({ active }) =>
    active ? 'visible' : 'hidden'};

  background-color: rgb(0 0 0 / 51%);
  backdrop-filter: blur(2px);
  transition-duration: 0.01s;
  transition-delay: 0.08s;
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
  background: ${smooth};

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

  &:hover {
    opacity: 0.75;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

/**
 *
 * @component
 * @param {Boolean}  active   is modal active
 * @param {String}   title    title in the header
 * @param {Function} close    close modal
 * @param {Object}   children passed components
 * @param {String}   icon     icon name
 */

const ModalComponent = memo(
  ({ active, title, icon, toggle, children }) => {
    const ref = createRef();

    // hooks
    useOnClickOutside(ref, (data) => {
      if (!data.includes('inside')) {
        toggle(false);
      }
    });

    return (
      <Modal active={active}>
        <Content ref={ref}>
          <Header>
            <TitleWrapper>
              {icon && <Icon icon={icon} />}
              <H3>{title}</H3>
            </TitleWrapper>
            <Close onClick={() => toggle(false)}>
              &times;
            </Close>
          </Header>
          <Body>{children}</Body>
        </Content>
      </Modal>
    );
  },
);

export default ModalComponent;
