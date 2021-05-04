import React, { memo } from 'react';
import styled from 'styled-components';

import Icon from 'Components/Icon';
import Tootip from 'Components/Tooltip';
import { ListItem } from 'Components/Common';
import {
  ButtonSelect,
  Badge,
} from 'Components/Common/styled';

const TabItem = styled(ListItem)`
  margin: 5px 20px;
`;

const TabPanel = ({ selected, toggle }) => {
  const tabs = [
    {
      name: 'chat',
      action: 'getMessage',
      content: 'messages',
      icon: 'MessageCircle',
      status: 'warning',
    },
    {
      name: 'users',
      action: 'getMessage',
      content: 'messages',
      icon: 'User',
      status: 'error',
    },
    {
      name: 'stars',
      icon: 'Star',
    },
    {
      name: 'archive',
      icon: 'Archive',
    },
  ];

  return (
    <>
      {tabs.map(({ name, icon, action, status }) => (
        <>
          <TabItem key={name}>
            <Tootip placement="right" title={name}>
              <ButtonSelect
                active={selected === name}
                onClick={() => toggle({ name, action })}
              >
                <>
                  <Icon icon={icon} />
                  <Badge status={status} />
                </>
              </ButtonSelect>
            </Tootip>
          </TabItem>
        </>
      ))}
    </>
  );
};

export default memo(TabPanel);
