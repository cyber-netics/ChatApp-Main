import React, { useState } from 'react';
import styled from 'styled-components';

import UserFigure from 'Components/UserFigure';
import Dropdown from 'Components/Dropdown';
import Icon from 'Components/Icon';
import Menu from 'Components/Menu';
import {
  ListItemDivider,
  Small,
  ActiveIcon,
} from 'Components/SharedStyles';

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

const Count = styled.div`
  width: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  font-size: 13px;
  height: 23px;
  background-color: #0a80ff;
  color: white;
  border-radius: 50%;
  margin-left: auto;
`;

const Text = styled.span`
  font-size: 15px;
`;

const ListView = styled(ListItemDivider)`
  padding: 17px 30px;
  display: flex;
  cursor: pointer;
  border-width: 0 0 1px;

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

const ChatView = ({ data, select, menu }) => {
  const [active, setactive] = useState({
    chat: {}, // Clean up
    users: {},
  });

  const handleSelect = (item) => {
    setactive({ ...active, [menu]: item });
    select(item); // Get Content action
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
            active={active[menu].id === id}
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
                overlay={() => (
                  <>
                    {menu === 'chat' && (
                      <Menu>
                        <Menu.Item>Profile</Menu.Item>
                        <Menu.Item>Delete</Menu.Item>
                      </Menu>
                    )}
                    {menu === 'users' && (
                      <Menu>
                        <Menu.Item>New Chat</Menu.Item>
                        <Menu.Item>Profile</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item>Block</Menu.Item>
                      </Menu>
                    )}
                  </>
                )}
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

export default ChatView;
