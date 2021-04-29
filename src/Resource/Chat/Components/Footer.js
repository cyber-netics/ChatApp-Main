import React from 'react';
import styled from 'styled-components';

import Btn from 'Components/Button';
import { Input } from 'Components/SharedStyles';
import {
  List as Ul,
  ListItem as Ui,
} from 'Components/Common';

const Container = styled.div`
  border-top: 1px solid #e6e6e6;
  border-top-color: #293145;
  padding: 17px 20px;
  position: relative;

  & .inputmessage {
    width: 100%;
  }
`;

const List = styled(Ul)`
  display: flex;
  align-items: center;
  width: 100%:
`;

const ListItem = styled(Ui)`
  position: relative;
  display: block;
  margin: 0 0.55rem;
`;

const Form = styled.form`
  width: 100%;
`;

const Button = styled(Btn)`
  padding: 10px 15px;
  background: ${(props) =>
    props.type
      ? props.theme.colors[props.type]
      : 'none'};
`;

const InputMessage = styled(Input)`
  padding: 11px 15px;
  width: 100%;
`;

const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit');
  };

  const handleInputMessage = (e) => {
    e.preventDefault();
    console.log('message value', e.target.value);
  };

  const handleSelectFile = (e) => {
    e.preventDefault();
    console.log('select File');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('send Message');
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <List>
          <ListItem>
            <Button
              onClick={handleSelectFile}
              icon={'Smile'}
            />
          </ListItem>

          <ListItem className="inputmessage">
            <InputMessage
              onChange={handleSelectFile}
              placeholder="write a message"
            />
          </ListItem>

          <ListItem>
            <Button
              onClick={handleSelectFile}
              icon={'Paperclip'}
            />
          </ListItem>

          <ListItem>
            <Button
              icon={'Send'}
              color={'#fff'}
              type={'primary'}
            />
          </ListItem>
        </List>
      </Form>
    </Container>
  );
};

export default Footer;