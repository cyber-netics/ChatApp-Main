import React from 'react';
import styled from 'styled-components';

import Layout from './Layout';

import Button from 'Components/Button';
import { Input as TextInput } from 'Components/Common';
import {
  border,
  primary,
} from 'Components/Common/colors';

const Input = styled(TextInput)`
  border: 1px solid ${border};
  height: 35px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  text-align: center;
  justify-content: center;
  background: ${({ active }) => active && primary};
  color: ${({ active }) => active && '#fff'};
  width: ${({ width }) =>
    width === 'auto' ? 'auto' : '100%'};
`;

const Divider = styled.div`
  color: ${border};
  border-top: 1px solid ${border};
  margin: 2rem 0;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
`;

const FormItem = styled.div`
  margin-top: 1.45rem;
`;

const Login = () => {
  return (
    <Layout title={'Reset password'}>
      <Form>
        <FormItem>
          <Input placeholder={'Email'} />
        </FormItem>
        <FormItem>
          <SubmitButton active={true} title="Submit" />
        </FormItem>
      </Form>
      <Divider />
    </Layout>
  );
};

export default Login;
