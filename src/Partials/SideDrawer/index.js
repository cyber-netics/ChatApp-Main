import React, { memo } from 'react';
import styled from 'styled-components';

import Drawer from 'Components/Drawer';
import Button from 'Components/Button';
import Avatar from 'Components/Avatar';

import { Small } from 'Components/Common';

const Wrapper = styled.div`
  position: relative;
  dispaly: inline-block;
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

const Content = styled.div`
  padding: 1.5rem 0;
  text-align: center;
  h2 {
    margin-bottom: 0;
    margin-top: 1rem;
  }
`;

const Profile = memo(({ active, toggle }) => (
  <Drawer open={active}>
    <Wrapper>
      <Header>
        <Title>Profile</Title>
        <Button
          onClick={() => toggle(false)}
          size={'sm'}
          icon={'x'}
          color={'#fd397a'}
        />
      </Header>
      <Body>
        <Content>
          <Avatar size="xl" />
          <Title>Mirabelle Tow</Title>
          <Small>Last seen: Today</Small>
        </Content>
      </Body>
    </Wrapper>
  </Drawer>
));

export default Profile;
