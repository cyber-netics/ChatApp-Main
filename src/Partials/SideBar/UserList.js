import React from 'react';
import styled from 'styled-components';

import UserFigure from '../../Components/UserFigure';
import { ListItemDivider } from '../../Components/SharedStyles';

const ListAction = styled.div`
  right: 0;
  width: 50px;
`;

const Small = styled.small`
  color: ${(props) =>
    props.active
      ? props.theme.colors.activeColor
      : props.theme.colors.neutralTextSecond};
  font-size: 80%;
  font-weight: 400;
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
  border-color: #293145;
  border-width: 0 0 1px;
  background-color: ${(props) =>
    props.active ? '#1f273b' : ''} !important;

  &: hover .dropdown-item {
    visibility: visible;
  }
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
              active={item.unread_messages}
              text={<Text>{item.text}</Text>}
              status={item.status}
            />
          )}
          <ListAction>
            <div style={{ position: 'absolute' }}>
              {item.unread_messages ? (
                <Count>{item.unread_messages}</Count>
              ) : (
                <></>
              )}
              <Small active={item.unread_messages}>
                {item.date}
              </Small>
            </div>
            {/* <Dropdown align="right">
              <span>
                <Icon size={"lg"} icon={"MoreHorizontal"} />
              </span>
            </Dropdown> */}
          </ListAction>
        </ListView>
      ))}
    </>
  );
};

export default ChatView;
