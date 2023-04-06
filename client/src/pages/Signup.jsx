import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BgContainer from '../components/BgContainer';
import {
  Button,
  FileInput,
  Input,
  Label,
  LinkButton,
  LoginTitle,
  PageTitle,
  Container,
  LoginContainer,
} from '../helpers/GlobalStyles';
import plusIcon from '../assets/profilePicPlus.png';
import { useAuth } from '../context/JWTAuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Message from '../components/Message';

const ProfilePictureContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background: #c4c4c4;
  position: relative;
  margin: auto;
  outline: 5px solid #8173dc;

  & img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
    object-fit: cover;
  }
`;

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const naviagte = useNavigate();
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
  const { signUp } = useAuth();

  const formikSignup = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      photo: null,
    },
    validationSchema: Yup.object({
      photo: Yup.mixed()
        .nullable()
        .test('required', 'Please upload a Profile Photo', (value) => {
          return value != null;
        })
        .test(
          'fileType',
          'Upload Images only (.png, .jpg, .jpeg)',
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
      name: Yup.string()
        .max(25, 'Provide a Short name')
        .required('Name is Required'),
      email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password is too Short'),
      passwordConfirm: Yup.string()
        .required('Confirm your password')
        .oneOf([Yup.ref('password')], "Password doesn't match"),
    }),
    onSubmit: async (values) => {
      await signUp(values);
    },
  });
  return (
    <>
      <BgContainer />
      <Container>
        <Message />
        <PageTitle>Agument Code</PageTitle>
        <LoginContainer
          onSubmit={formikSignup.handleSubmit}
          encType='multipart/form-data'>
          <LoginTitle>SIGN UP</LoginTitle>
          <Label>
            <p>Upload Your Profile Picture</p>

            <ProfilePictureContainer>
              <img src={profilePic ? profilePic : plusIcon} alt='profilePic' />
              <FileInput
                type='file'
                name='profilePiture'
                hidden
                onChange={(e) => {
                  const fileReader = new FileReader();
                  fileReader.onload = () => {
                    if (fileReader.readyState === 2) {
                      formikSignup.setFieldValue('photo', e.target.files[0]);
                      setProfilePic(fileReader.result);
                    }
                  };
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
                onBlur={formikSignup.handleBlur}
                accept='image/*'
                touched={formikSignup.touched['photo']}
              />
            </ProfilePictureContainer>
            {formikSignup.errors.photo && (
              <p style={{ color: 'red' }}>!! {formikSignup.errors.photo}</p>
            )}
          </Label>
          <Label>
            <p>Enter your Name</p>
            <Input
              type='type'
              name='name'
              value={formikSignup.values.name}
              onChange={formikSignup.handleChange}
              onBlur={formikSignup.handleBlur}
            />
            {formikSignup.touched.name && formikSignup.errors.name && (
              <p style={{ textAlign: 'right', color: 'red' }}>
                !! {formikSignup.errors.name}
              </p>
            )}
          </Label>
          <Label>
            <p>Enter your Email Address</p>
            <Input
              type='email'
              name='email'
              value={formikSignup.values.email}
              onChange={formikSignup.handleChange}
              onBlur={formikSignup.handleBlur}
            />
            {formikSignup.touched.email && formikSignup.errors.email && (
              <p style={{ textAlign: 'right', color: 'red' }}>
                !! {formikSignup.errors.email}
              </p>
            )}
          </Label>
          <Label>
            <p>Enter your Password</p>
            <Input
              type='password'
              name='password'
              value={formikSignup.values.password}
              onChange={formikSignup.handleChange}
              onBlur={formikSignup.handleBlur}
            />
            {formikSignup.touched.password && formikSignup.errors.password && (
              <p style={{ textAlign: 'right', color: 'red' }}>
                !! {formikSignup.errors.password}
              </p>
            )}
          </Label>
          <Label>
            <p>Confirm your Password</p>
            <Input
              type='password'
              name='passwordConfirm'
              value={formikSignup.values.passwordConfirm}
              onChange={formikSignup.handleChange}
              onBlur={formikSignup.handleBlur}
            />
            {formikSignup.touched.passwordConfirm &&
              formikSignup.errors.passwordConfirm && (
                <p style={{ textAlign: 'right', color: 'red' }}>
                  !! {formikSignup.errors.passwordConfirm}
                </p>
              )}
          </Label>
          <Button type='submit'>CREATE AN ACCOUNT</Button>
          <LinkButton outlined='true' to='/signin'>
            Already a User ?, Sign In
          </LinkButton>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Signup;
