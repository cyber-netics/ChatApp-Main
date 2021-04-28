import React from 'react';
import styled from 'styled-components';

import { tabs } from './tabs.json';
import Icon from '../../../Components/Icon';
import { ListItem } from '../../../Components/Common';
import {
  ButtonSelect,
  Badge,
} from '../../../Components/SharedStyles';

const TabItem = styled(ListItem)`
  margin: 5px 20px;
`;

const TabPanel = (props) => {
  return tabs.map(({ name, action, icon, status }) => (
    <TabItem key={name}>
      <ButtonSelect
        active={props.selected === name}
        onClick={() => props.toggle({ name, action })}
      >
        <Icon icon={icon} />
        <Badge status={status} />
      </ButtonSelect>
    </TabItem>
  ));
};

export default TabPanel;
