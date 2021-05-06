import React, { memo } from 'react';
import styled from 'styled-components';

import { Background } from 'Components/Common';
import Drawer from 'Components/Drawer';

// Menus
import ProfileMenu from './menus/Profile';
import SettingMenu from './menus/Setting';

const Content = styled.div`
  text-align: center;
`;

const Profile = memo(({ drawer, toggle }) => {
  if (!drawer.activeMenu) return <></>;

  const { isOpen, activeMenu } = drawer;

  return (
    <Background>
      <Drawer
        toggle={toggle}
        open={isOpen}
        title={activeMenu}
      >
        <Content>
          {activeMenu === 'profile' && <ProfileMenu />}
          {activeMenu === 'settings' && <SettingMenu />}
        </Content>
      </Drawer>
    </Background>
  );
});

export default Profile;
