import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

const ResetToken = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const queryParameters = new URLSearchParams(window.location.search);
  const resetToken = queryParameters.get('resetToken');
  const passwordReset = async () => {
    await resetPassword(token, password, confirmPassword);
    navigate('/dashboard');
  };
  useEffect(() => {
    if (resetToken) {
      setToken(resetToken);
    }
  }, []);

  return (
    <Container>
      <BgContainer />
      <Message />
      <PageTitle>Agument Code</PageTitle>
      <LoginContainer>
        <LoginTitle>RESET PASSWORD</LoginTitle>
        <Label style={{ display: resetToken ? 'none' : '' }}>
          <p>Enter your Token</p>
          <Input
            type='text'
            name='token'
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </Label>
        <Label>
          <p>Enter Password</p>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Label>
          <p>Enter Confirm Password</p>
          <Input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Label>
        <Button onClick={passwordReset}>Send a Password Reset Mail</Button>
        <LinkButton outlined='true' to='/forgetPassword'>
          Go Back
        </LinkButton>
      </LoginContainer>
    </Container>
  );
};

export default ResetToken;
