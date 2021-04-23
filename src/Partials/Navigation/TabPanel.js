import React from 'react';
import styled from 'styled-components';

import Icon from '../../Components/Icon';
import { ListItem } from '../../Components/Common';

import {
  ButtonSelect,
  Badge,
} from '../../Components/SharedStyles';

const TabItem = styled(ListItem)`
  margin: 5px 20px;
`;

const TabPanel = (props) => {
  return props.list.map(({ name, icon, status }) => (
    <TabItem key={name}>
      <ButtonSelect
        onClick={() => props.toggle(name)}
        active={props.selected === name}
      >
        <Icon icon={icon} />
        <Badge status={status} />
      </ButtonSelect>
    </TabItem>
  ));
};

export default TabPanel;
