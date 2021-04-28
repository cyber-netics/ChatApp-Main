import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Components/Common';
import UnselectedChat from '../../assets/img/unselected-chat.svg';

const Wrapper = styled.div`
  width: 100%;
`;

const UnselectedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Unselected = styled.div`
  top: 37%;
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 1.7rem;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #828282;
`;

const EmptySelection = () => (
  <UnselectedContainer>
    <Unselected>
      <Image
        src={UnselectedChat}
        width={200}
        alt="unselected"
      />
      <Text>Select a chat to read messages</Text>
    </Unselected>
  </UnselectedContainer>
);

const Workbench = (props) => {
  if (!false) return <EmptySelection />;

  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Workbench;
