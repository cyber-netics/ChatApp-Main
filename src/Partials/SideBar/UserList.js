import React, { memo, useState } from 'react';
import styled from 'styled-components';

import UserFigure from 'Components/UserFigure';
import Dropdown from 'Components/Dropdown';
import Icon from 'Components/Icon';

import {
  ListItemDivider,
  Small,
  ActiveIcon,
  Count,
} from 'Components/Common';

const ListAction = styled.div`
  right: 0;
  width: 50px;
  .count {
    visibility: visible;
  }
`;

const Action = styled.div`
  position: absolute;
  text-align: right;
`;

const Text = styled(Small)`
  top: 3px;
  font-size: 14px;
  font-weight: inherit;
`;

const ListViewBase = styled(ListItemDivider)`
  padding: 19px 30px;
  display: flex;
  cursor: pointer;
  border-width: 0 0 1px;
  line-height: 1.5;
`;

const ListView = styled(ListViewBase)`
  &: hover .dropdown-item {
    display: block;
    visibility: visible;
    transition: visibility 0s linear 0.1s;
  }

  &: hover .count {
    visibility: hidden;
    transition: visibility 0s linear 0.1s;
  }
`;

const DropDown = styled(Dropdown)`
  visibility: hidden;
  text-align: right;
`;

const ChatView = ({
  data,
  handleFetch,
  activeTab,
  menu,
}) => {
  const [active, setactive] = useState({});

  const handleSelect = (item) => {
    setactive({ ...active, [activeTab]: item });
    handleFetch(item); // Get Content action
  };

  if (!data) return <></>;

  return (
    <>
      {data.map((item, i) => {
        const {
          id,
          date,
          text,
          name,
          avatar,
          status,
          unread_messages,
        } = item;

        return (
          <ListView
            key={i}
            active={active[activeTab]?.id === id}
            onClick={() => handleSelect(item)}
          >
            {avatar && (
              <UserFigure
                name={name}
                avatar={avatar}
                active={!!unread_messages}
                text={<Text>{text}</Text>}
                status={status}
              />
            )}
            <ListAction>
              <Action className="count">
                {unread_messages ? (
                  <Count>{unread_messages}</Count>
                ) : (
                  <></>
                )}
                <Small active={unread_messages}>
                  {date}
                </Small>
              </Action>
              <DropDown
                className="dropdown-item"
                placement="bottomLeft"
                align="right"
                id={id}
                overlay={menu}
              >
                <ActiveIcon>
                  <Icon
                    size="lg"
                    icon="MoreHorizontal"
                  />
                </ActiveIcon>
              </DropDown>
            </ListAction>
          </ListView>
        );
      })}
    </>
  );
};

export default memo(ChatView);
