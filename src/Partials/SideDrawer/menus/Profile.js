import React from 'react';
import styled from 'styled-components';

import Avatar from 'Components/Avatar';
import { Small } from 'Components/Common';

const Container = styled.div``;

const Title = styled.h2`
  display: flex !important;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
`;

const ProfileMenu = () => {
  return (
    <Container>
      <Avatar size="xl" />
      <Title>Mirabelle Tow</Title>
      <Small>Last seen: Today</Small>
    </Container>
  );
};

export default ProfileMenu;
