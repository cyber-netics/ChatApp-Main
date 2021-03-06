import React, { memo } from 'react';
import styled from 'styled-components';

import Drawer from 'Components/Drawer';
import { background } from 'Components/Common/colors';

// Menus
import ProfileMenu from './menus/Profile';
import SettingMenu from './menus/Setting';

const Container = styled.div`
  background: ${background};
`;

const Content = styled.div`
  text-align: center;
`;

// *** Change Profile to sidrower menu
// *****
const Profile = memo(({ drawer, toggle, profile }) => {
  if (!drawer.activeMenu) return <></>;

  const { isOpen, activeMenu } = drawer;

  return (
    <Container>
      <Drawer
        toggle={toggle}
        open={isOpen}
        title={activeMenu}
      >
        <>
          <Content>
            {activeMenu === 'profile' && (
              <ProfileMenu profile={profile} />
            )}
            {activeMenu === 'settings' && (
              <SettingMenu profile={profile} />
            )}
          </Content>
        </>
      </Drawer>
    </Container>
  );
});

export default Profile;
