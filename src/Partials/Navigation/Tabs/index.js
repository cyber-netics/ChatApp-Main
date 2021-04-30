import React from 'react';
import styled from 'styled-components';

import { tabs } from './tabs.json';
import Icon from 'Components/Icon';
import Tootip from 'Components/Tooltip';
import { ListItem } from 'Components/Common';
import {
  ButtonSelect,
  Badge,
} from 'Components/SharedStyles';

const TabItem = styled(ListItem)`
  margin: 5px 20px;
`;

const Tab = ({
  name,
  action,
  icon,
  status,
  selected,
  toggle,
}) => (
  <ButtonSelect
    active={selected === name}
    onClick={() => toggle({ name, action })}
  >
    <Icon icon={icon} />
    <Badge status={status} />
  </ButtonSelect>
);

const TabPanel = (props) => (
  <>
    {tabs.map((item) => (
      <TabItem key={item.name}>
        <Tootip placement="right" title={item.name}>
          <Tab {...item} {...props} />
        </Tootip>
      </TabItem>
    ))}
  </>
);

export default TabPanel;
