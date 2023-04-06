import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BgContainer from '../components/BgContainer';
import {
  Button,
  Input,
  Label,
  LinkButton,
  LoginTitle,
  PageTitle,
  Container,
  LoginContainer,
} from '../helpers/GlobalStyles';
import GoogleIcon from '../assets/GoogleIcon.png';
import { useAuth } from '../context/JWTAuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Message from '../components/Message';
const ForgetPassword = styled(Link)`
  display: block;
  text-align: right;
  width: 100%;
  color: white;
  text-decoration: none;
  padding: 1.5rem 0 0 0;
  &:hover {
    text-decoration: underline;
  }
`;

const Signin = () => {
  const { signIn, loading, error } = useAuth();
  const formikSignIn = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Enter a vaild Email')
        .required('Email required to login'),
      password: Yup.string().required('Password Required to login'),
    }),
    onSubmit: async (values) => {
      await signIn(values.email, values.password);
    },
  });
  return (
    <>
      <BgContainer />
      <Container>
        <Message />
        <PageTitle>Agument Code</PageTitle>
        <LoginContainer onSubmit={formikSignIn.handleSubmit}>
          <LoginTitle>SIGN IN</LoginTitle>
          <Label>
            <p>Enter your Email Address</p>
            <Input
              type='email'
              name='email'
              value={formikSignIn.values.email}
              onChange={formikSignIn.handleChange}
              onBlur={formikSignIn.handleBlur}
            />
            {formikSignIn.touched.email && formikSignIn.errors.email && (
              <p style={{ textAlign: 'right', color: 'red' }}>
                !! {formikSignIn.errors.email}
              </p>
            )}
          </Label>
          <Label>
            <p>Enter your Password</p>
            <Input
              type='password'
              name='password'
              value={formikSignIn.values.password}
              onChange={formikSignIn.handleChange}
              onBlur={formikSignIn.handleBlur}
            />
            {formikSignIn.touched.password && formikSignIn.errors.password && (
              <p style={{ textAlign: 'right', color: 'red' }}>
                !! {formikSignIn.errors.password}
              </p>
            )}
            <ForgetPassword to='/forgetPassword'>
              Forget Password ?
            </ForgetPassword>
          </Label>
          <Button type='submit' disabled={loading}>
            SIGN IN
          </Button>
          {/* <Button outlined='true'>
            <img src={GoogleIcon} />
            &nbsp;&nbsp; Sign In With Google
          </Button> */}
          <LinkButton outlined='true' to='/signup'>
            Don't have an Account ? Sign Up
          </LinkButton>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Signin;
