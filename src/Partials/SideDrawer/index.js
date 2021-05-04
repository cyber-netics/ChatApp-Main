import React, { memo } from 'react';
import styled from 'styled-components';

import Drawer from 'Components/Drawer';
import Avatar from 'Components/Avatar';

import { Small } from 'Components/Common';

const Title = styled.h2`
  display: flex !important;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
`;

const Content = styled.div`
  padding: 1.5rem 0;
  text-align: center;

  h2 {
    margin-bottom: 0;
    margin-top: 1rem;
  }
`;

const Profile = memo(({ drawer, toggle }) => {
  if (!drawer.activeMenu) return <></>;

  return (
    <Drawer
      toggle={toggle}
      open={drawer.isOpen}
      title={drawer.activeMenu}
    >
      <Content>
        {drawer.activeMenu === 'profile' && (
          <>
            <Avatar size="xl" />
            <Title>Mirabelle Tow</Title>
            <Small>Last seen: Today</Small>
          </>
        )}
        
        {drawer.activeMenu === 'settings' && (
          <>
            <Title>Settings</Title>
            <Small>Last seen: Today</Small>
          </>
        )}
      </Content>
    </Drawer>
  );
});

export default Profile;
