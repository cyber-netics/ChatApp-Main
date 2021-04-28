import React from 'react';
import styled from 'styled-components';

import UserFigure from '../../Components/UserFigure';
import Dropdown from '../../Components/Dropdown';
import Icon from '../../Components/Icon';
import Menu from '../../Components/Menu';

import {
  ListItemDivider,
  Small,
  ActiveIcon,
} from '../../Components/SharedStyles';

const ListAction = styled.div`
  right: 0;
  width: 50px;
  .count {
    display: block;
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
  background-color: ${(props) =>
    props.active && '#1f273b'};

  &: hover .dropdown-item {
    display: block;
  }
  &: hover .count {
    display: none;
  }
`;

const DropDown = styled(Dropdown)`
  display: none;
  text-align: right;
`;

const ChatView = ({ data, active, handleSelect }) => {
  return (
    <>
      {data.map((item, i) => (
        <ListView
          key={i}
          active={active === item.id}
          onClick={() => handleSelect(item)}
        >
          {item.avatar && (
            <UserFigure
              name={item.name}
              avatar={item.avatar}
              active={!!item.unread_messages}
              text={<Text>{item.text}</Text>}
              status={item.status}
            />
          )}
          <ListAction>
            <Action className="count">
              {item.unread_messages ? (
                <Count>{item.unread_messages}</Count>
              ) : (
                <></>
              )}
              <Small active={item.unread_messages}>
                {item.date}
              </Small>
            </Action>
            <DropDown
              className="dropdown-item"
              position="bottomLeft"
              align="right"
              overlay={() => (
                <Menu>
                  <Menu.Item>Profile</Menu.Item>
                  <Menu.Item>Delete</Menu.Item>
                </Menu>
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
      ))}
    </>
  );
};

export default ChatView;
