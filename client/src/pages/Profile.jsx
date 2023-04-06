import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  ContentSection,
  FileInput,
  Input,
  Label,
  Title,
} from '../helpers/GlobalStyles';
import plusIcon from '../assets/profilePicPlus.png';
import { useAuth } from '../context/JWTAuthContext';
import { Form, useFormik } from 'formik';
import * as Yup from 'yup';
import getChangedValues from '../helpers/getChangedValues';
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

const Profile = () => {
  const { currentUser, updatePassword, loading, updateUserData } = useAuth();
  const [profilePic, setProfilePic] = useState(currentUser.photo);
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', null];

  const initialValues = {
    profilePicture: currentUser.photo,
    name: currentUser.name,
    email: currentUser.email,
  };

  const formikUpdateProfile = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      photo: Yup.mixed().nullable(),
      name: Yup.string().max(25, 'Provide a Short name'),
    }),
    onSubmit: async (values) => {
      const data = getChangedValues(values, initialValues);
      await updateUserData(data);
    },
  });

  const formikUpdatePassword = useFormik({
    initialValues: {
      currentPassword: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required('Current Password is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password is too Short'),
      confirmPassword: Yup.string()
        .required('Confirm your password')
        .oneOf([Yup.ref('password')], "Password doesn't match"),
    }),
    onSubmit: async (values) => {
      const { currentPassword, password, confirmPassword } = values;
      await updatePassword(currentPassword, password, confirmPassword);
    },
  });

  return (
    <>
      <Message />
      <Title>Profile</Title>
      <form
        onSubmit={formikUpdateProfile.handleSubmit}
        encType='multipart/form-data'>
        <ContentSection>
          <Label>
            <p>Update Profile Picture</p>

            <ProfilePictureContainer>
              <img
                src={
                  profilePic
                    ? `${import.meta.env.VITE_SERVER_DOMAIN_NAME}${profilePic}`
                    : plusIcon
                }
                alt='profilePic'
              />
              <FileInput
                type='file'
                name='profilePiture'
                hidden
                onChange={(e) => {
                  const fileReader = new FileReader();
                  fileReader.onload = () => {
                    if (fileReader.readyState === 2) {
                      formikUpdateProfile.setFieldValue(
                        'photo',
                        e.target.files[0]
                      );
                      setProfilePic(fileReader.result);
                    }
                  };
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
                onBlur={formikUpdateProfile.handleBlur}
                accept='image/*'
                touched={formikUpdateProfile.touched['profilePicture']}
              />
            </ProfilePictureContainer>
            {formikUpdateProfile.errors.profilePicture && (
              <p style={{ color: 'red' }}>
                !! {formikUpdateProfile.errors.profilePicture}
              </p>
            )}
          </Label>
          <Label>
            <p>Email Address</p>
            <Input
              type='email'
              name='email'
              value={formikUpdateProfile.values.email}
              onChange={formikUpdateProfile.handleChange}
              onBlur={formikUpdateProfile.handleBlur}
              disabled={true}
            />
            {formikUpdateProfile.touched.email &&
              formikUpdateProfile.errors.email && (
                <p style={{ textAlign: 'right', color: 'red' }}>
                  !! {formikUpdateProfile.errors.email}
                </p>
              )}
          </Label>
          <Label>
            <p>Update Name</p>
            <Input
              type='text'
              name='name'
              value={formikUpdateProfile.values.name}
              onChange={formikUpdateProfile.handleChange}
              onBlur={formikUpdateProfile.handleBlur}
            />
            {formikUpdateProfile.touched.name &&
              formikUpdateProfile.errors.name && (
                <p style={{ textAlign: 'right', color: 'red' }}>
                  !! {formikUpdateProfile.errors.name}
                </p>
              )}
          </Label>

          <Button type='submit'>Update Profile</Button>
        </ContentSection>
      </form>

      <Title>Update Password</Title>
      <form onSubmit={formikUpdatePassword.handleSubmit}>
        <ContentSection>
          <Label>
            <p>Enter Your Current Password</p>
            <Input
              type='password'
              name='currentPassword'
              value={formikUpdatePassword.values.currentPassword}
              onChange={formikUpdatePassword.handleChange}
              onBlur={formikUpdatePassword.handleBlur}
            />
            {formikUpdatePassword.touched.currentPassword &&
              formikUpdatePassword.errors.currentPassword && (
                <p style={{ textAlign: 'right', color: 'red' }}>
                  !! {formikUpdatePassword.errors.currentPassword}
                </p>
              )}
          </Label>
          <Label>
            <p>Enter New Password</p>
            <Input
              type='password'
              name='password'
              value={formikUpdatePassword.values.password}
              onChange={formikUpdatePassword.handleChange}
              onBlur={formikUpdatePassword.handleBlur}
            />
            {formikUpdatePassword.touched.password &&
              formikUpdatePassword.errors.password && (
                <p style={{ textAlign: 'right', color: 'red' }}>
                  !! {formikUpdatePassword.errors.password}
                </p>
              )}
          </Label>
          <Label>
            <p>Confirm your New Password</p>
            <Input
              type='password'
              name='confirmPassword'
              value={formikUpdatePassword.values.confirmPassword}
              onChange={formikUpdatePassword.handleChange}
              onBlur={formikUpdatePassword.handleBlur}
            />
            {formikUpdatePassword.touched.confirmPassword &&
              formikUpdatePassword.errors.confirmPassword && (
                <p style={{ textAlign: 'right', color: 'red' }}>
                  !! {formikUpdatePassword.errors.confirmPassword}
                </p>
              )}
          </Label>
          <Button type='submit'>Update Password</Button>
        </ContentSection>
      </form>
    </>
  );
};

export default Profile;
