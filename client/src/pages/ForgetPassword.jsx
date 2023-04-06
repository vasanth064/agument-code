import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BgContainer from '../components/BgContainer';
import Message from '../components/Message';
import { useAuth } from '../context/JWTAuthContext';
import {
  Button,
  Input,
  Label,
  LinkButton,
  LoginTitle,
  PageTitle,
} from '../helpers/GlobalStyles';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const LoginContainer = styled.div`
  width: 1080px;
  max-width: 1080px;
  max-height: 750px;
  background: rgba(38, 40, 55, 0.9);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 7rem;
  gap: 1.5rem;
  border-radius: 25px;
`;

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgetPassword, error } = useAuth();
  const [email, setEmail] = useState('');
  const sendPasswordResetMail = async () => {
    const res = await forgetPassword(email);
    if (!error == null) {
      navigate('/resetToken');
    }
  };
  return (
    <Container>
      <BgContainer />
      <Message />
      <PageTitle>Agument Code</PageTitle>
      <LoginContainer>
        <LoginTitle>FORGET PASSWORD</LoginTitle>
        <Label>
          <p>Enter your Email Address</p>
          <Input
            type='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Button onClick={sendPasswordResetMail}>
          Send a Password Reset Mail
        </Button>
        <LinkButton outlined='true' to='/signin'>
          Go Back
        </LinkButton>
      </LoginContainer>
    </Container>
  );
};

export default ForgetPassword;
