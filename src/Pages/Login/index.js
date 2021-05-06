import React, { useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as logo } from 'assets/logo.svg';
import Checkbox from 'Components/Checkbox';

import { borderStatic } from 'Components/Common/colors';

import {
  Container as PageWrapper,
  Input as TextInput,
} from 'Components/Common';

const Container = styled(PageWrapper)`
  background: #fff !important;
`;

const Wrapper = styled.div`
  border: 1px solid ${borderStatic};
  background-color: white;
  padding: 3rem;
  border-radius: 5px;
  width: 330px;
  margin: 100px auto;
  text-align: center;
`;

const Logo = styled.div`
  background-color: white;
  width: 63px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: -100px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;
const Icon = styled(logo)`
  overflow: hidden;
  vertical-align: middle;
`;

const Title = styled.h5`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const Input = styled(TextInput)`
  border: 1px solid ${borderStatic};
`;

const Form = styled.form``;

const FormItem = styled.div`
  margin-bottom: 1rem;
`;

const LoginPage = ({ toggleTheme }) => {

  useEffect(() => {
    // toggleTheme(false);
  });

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Icon />
        </Logo>
        <Title>Sign In</Title>
        <Form>
          <FormItem>
            <Input />
          </FormItem>
          <FormItem>
            <Input />
          </FormItem>
          <FormItem>
            <Checkbox />
          </FormItem>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
