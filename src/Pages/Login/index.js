import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Styles
import {
  border,
  primary,
} from 'Components/Common/colors';
import {
  Container as PageWrapper,
  Input as TextInput,
  List,
  ListItem,
} from 'Components/Common';

// Components
import { ReactComponent as logo } from 'assets/logo.svg';
import Checkbox from 'Components/Checkbox';
import Linkto from 'Components/Link';
import Button from 'Components/Button';

// Store
import { toggleTheme } from 'Store/action/ui';

const Container = styled(PageWrapper)`
  // background: #fff !important;
`;

const Wrapper = styled.div`
  border: 1px solid ${border};
  background-color: white;
  padding: 3rem;
  border-radius: 5px;
  width: 330px;
  height: 560px;
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
  border: 1px solid ${border};
  height: 35px;
`;

const Form = styled.form``;

const FormItem = styled.div`
  margin-top: 1.45rem;
`;

const Link = styled(Linkto)`
  font-size: 13.3px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.7rem;
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

const FormSubmit = styled.div`
  margin-top: 0.15rem;
`;

const Divider = styled.div`
  color: ${border};
  border-top: 1px solid ${border};
  margin: 2rem 0;
`;

const Footer = styled.div``;

//*****
const TextSecondary = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
`;

const BtnCircle = styled(Button)`
  border-radius: 50%;
  background: ${({ bg }) => bg || primary};
  padding: 12px 13px;
`;

const SocialList = styled(List)`
  position: relative;
  justify-content: center;
  display: flex;
`;

const SocialButton = styled(ListItem)`
  margin: 0.5rem 1rem 0 0;
`;

const SocialTitle = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.font};
`;

const LoginPage = memo((props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Set to light theme mode
  useEffect(() => {
    props.toggleTheme(false);
  });

  const checkbox = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('tesintg...', e);
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Icon />
        </Logo>
        <Title>Sign In</Title>
        <Form onSubmit={onSubmit}>
          <FormItem>
            <Input
              value={email}
              name="email"
              placeholder="Email"
              onChange={({ target: { value } }) =>
                setEmail(value)
              }
            />
          </FormItem>
          <FormItem>
            <Input
              value={password}
              name="password"
              placeholder="Password"
              onChange={({ target: { value } }) =>
                setPassword(value)
              }
            />
          </FormItem>
          <FormItem>
            <BoxContainer>
              <Checkbox
                label={'Remember me'}
                onChange={checkbox}
              />
              <Link to="/resetpass">Reset password</Link>
            </BoxContainer>
          </FormItem>
          <FormSubmit>
            <SubmitButton active={true} title="Submit" />
          </FormSubmit>
        </Form>
        <Divider />
        <SocialTitle>
          Login with social media account
        </SocialTitle>
        <SocialList>
          <SocialButton>
            <BtnCircle
              color={border}
              fill={'#fff'}
              icon={'facebook'}
            />
          </SocialButton>
          <SocialButton>
            <BtnCircle
              bg={'#eA4335'}
              color={border}
              fill={'black'}
              icon={'slack'}
            />
          </SocialButton>
          <SocialButton>
            <BtnCircle
              bg={'#F1502F'}
              color={border}
              fill={'#3E2c00'}
              icon={'gitlab'}
            />
          </SocialButton>
        </SocialList>
        <Divider />
        <Footer>
          <TextSecondary>
            Don't have an account ?
          </TextSecondary>
          <SubmitButton
            width="auto"
            title="Register now"
          />
        </Footer>
      </Wrapper>
    </Container>
  );
});

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProsp = (dispatch) => {
  return {
    toggleTheme: (mode) => dispatch(toggleTheme(mode)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp,
)(LoginPage);
