import React from 'react';
import styled from 'styled-components';

import { ButtonSelect, Badge } from '../SharedStyles';
import { ListItem as Item } from '../Shared';

import { tabs } from './tabs.json';
import Icon from '../Icon';

const ListItem = styled(Item)`
  margin: 5px 20px;
`;

const TabPanel = (props) => {
  return tabs.map(({ name, icon, status }) => (
    <ListItem>
      <ButtonSelect
        key={name}
        active={props.selected === name}
      >
        <Icon icon={icon} />
        <Badge status={status} />
      </ButtonSelect>
    </ListItem>
  ));
};

export default TabPanel;
