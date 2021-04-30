import React from 'react';
import styled from 'styled-components';
import UserFigure from 'Components/UserFigure';
import {
  Small,
  MessageStyle,
} from 'Components/SharedStyles';

const Container = styled.div`
  position: relative;
  overflow-y: scroll;
  height: calc(100% - 220px);
  padding: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Content = styled.div`
  max-width: 65%;
  margin-bottom: 3rem;
  margin-left: ${(props) => props.outgoing && 'auto'};
`;

const UserContainer = styled.div`
  justify-content: flex-end;
`;

const UserInfo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  float: ${(props) => props.outgoing && 'right'};
`;

const MessageContent = styled.div`
  position: relative;
  display: inline-block;
`;

const Message = styled(MessageStyle)`
  border-radius: 7px;
  padding: 10px 20px;
  min-width: 115px;
  line-height: 1.6;
  font-size: 14px;
`;

const Messages = ({ messages = [] }) => (
  <Container>
    <Wrapper>
      <>
        {messages.map(
          ({ outgoing, name, avatar, date, text }) => (
            <Content
              outgoing={outgoing}
              key={`${name}${date}`}
            >
              <>
                <UserContainer>
                  <UserInfo outgoing={outgoing}>
                    <UserFigure
                      name={name}
                      avatar={avatar}
                      text={<Small>{date}</Small>}
                    />
                  </UserInfo>
                </UserContainer>
                <MessageContent>
                  <Message outgoing={!!outgoing}>
                    <span>{text}</span>
                  </Message>
                </MessageContent>
              </>
            </Content>
          ),
        )}
      </>
    </Wrapper>
  </Container>
);

export default Messages;
