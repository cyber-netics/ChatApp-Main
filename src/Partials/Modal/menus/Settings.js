import React, { memo } from 'react';
import styled from 'styled-components';

import Switch from 'Components/Switch';
import HzMenu from 'Components/HzMenu';

import { List, ListItem } from 'Components/Common';

const OptionItem = styled(ListItem)`
  text-align: start;
  padding: 0.6rem 1rem;
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const AccountMenu = memo(() => (
  <List>
    <OptionItem>
      <Switch label="Allow contacts" size="sm" />
    </OptionItem>

    <OptionItem>
      <Switch label="Private Profile" size="sm" />
    </OptionItem>

    <OptionItem>
      <Switch label="Two-step verification" size="sm" />
    </OptionItem>

    <OptionItem>
      <Switch label="Developer mode" size="sm" />
    </OptionItem>
  </List>
));

const NotificationMenu = memo(() => (
  <List>
    <OptionItem>
      <Switch
        label="Allow mobile notifications"
        size="sm"
      />
    </OptionItem>

    <OptionItem>
      <Switch
        label="Notifications from your friends"
        size="sm"
      />
    </OptionItem>

    <OptionItem>
      <Switch
        label="Send notifications by email"
        size="sm"
      />
    </OptionItem>
  </List>
));

const SecurityMenu = memo(() => <div>{'Security'}</div>);

const Settings = memo(() => (
  <Container>
    <HzMenu
      list={['Account', 'Notification', 'Security']}
    >
      {(menu) => (
        <>
          {menu === 'Account' && <AccountMenu />}

          {menu === 'Notification' && (
            <NotificationMenu />
          )}

          {menu === 'Security' && <SecurityMenu />}
        </>
      )}
    </HzMenu>
  </Container>
));

export default Settings;
