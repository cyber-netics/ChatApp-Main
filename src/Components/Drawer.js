import React, { memo } from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div``;

const Container = styled(ContainerStyle)`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  flex-direction: column;
  right: 0;
  overflow: hidden;
  z-index: 1010;
  height: 100%;
  width: 350px;
  background: #1a2236;
  transition: all 0.2s;
  border-radius: 5px;
  box-shadow: 25px 0px 30px 5px black;
`;

const Wrapper = styled.div`
  width: 100%:
  height: 100%;
`;

const Drawer = memo(({ open, className, children }) => (
  <Container className={className} open={open}>
    <Wrapper>{children}</Wrapper>
  </Container>
));

export default Drawer;
