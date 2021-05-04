import React, { memo } from 'react';
import styled, {
  keyframes,
  css,
} from 'styled-components';

import helpers from 'helpers';
import Button from 'Components/Button';

const keyframes_slideOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const keyframes_slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slidein = css`
  animation: ${keyframes_slideIn};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;

const slideout = css`
  animation: ${keyframes_slideOut};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;

const ContainerStyles = styled.div`
  transition: visibility 1s ease-in;
  ${({ open }) => (open ? slidein : slideout)}
  visibility: ${({ open }) =>
    open ? 'visible' : 'hidden'};
`;

const Container = styled(ContainerStyles)`
  width: 350px;
  position: fixed;
  flex-direction: column;
  right: 0;
  overflow: hidden;
  z-index: 1010;
  height: 100%;
  background: #1a2236;
  border-radius: 5px;
  box-shadow: 25px 0px 30px 5px black;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 80px;
  font-weight: 600;
  border-radius: 0;
`;

const Title = styled.h2`
  display: flex !important;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
`;

const Body = styled.div`
  flex: 1 1;
  overflow: auto;
`;

const Drawer = memo(
  ({ open, title, toggle, className, children }) => {
    return (
      <Container className={className} open={open}>
        <Wrapper>
          <Header>
            <Title>
              {helpers.firstChartUppercase(title)}
            </Title>
            <Button
              onClick={() => toggle(false)}
              size={'sm'}
              icon={'x'}
              color={'#fd397a'}
            />
          </Header>
          <Body>{children}</Body>
        </Wrapper>
      </Container>
    );
  },
);

export default Drawer;
