import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import routes from '../data/routes';

import logoutIcon from './../assets/icons/logout.svg';
import { useAuth } from '../context/JWTAuthContext';

const Sidebar = styled(motion.nav)`
  height: 100vh;
  max-width: 325px;
  position: sticky;
  top: 0;
  z-index: 101;
  overflow-y: auto;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #1f1d2c;
  &::-webkit-scrollbar {
    width: 0.75em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  margin-top: 1rem;
  background-color: #1f1d2c;

  & a:nth-child(1) {
    display: flex;
    align-items: center;
    width: 87%;

    & img {
      height: 4rem;
      width: auto;
      object-fit: cover;
      border-radius: 50%;
    }

    & div {
      padding: 1rem 1rem;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      & p {
        font-weight: 600;
      }
      & p:nth-child(1) {
        font-size: 1.05rem;
        color: #f2f1f8;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & p:nth-child(2) {
        font-size: 0.9rem;
        color: #8f8e95;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
const SettingsContainer = styled.div`
  display: flex;
  place-items: center;
  background-color: #403d50;
  padding: 0.75rem;
  border-radius: 15px;
`;
const NavList = styled.ul`
  margin: 1rem 0;
`;
export const SideBarExpanded = (props) => {
  const { signOut } = useAuth();
  return (
    <Sidebar
      {...props}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'tween',
        duration: 0.5,
      }}>
      <ProfileSection>
        <Link to='/profile'>
          <motion.img
            src={`${import.meta.env.VITE_SERVER_DOMAIN_NAME}${
              props.userData.photo
            }`}
            alt={props.userData.name}
            whileHover={{ scale: 1.1 }}
          />
          <div>
            <p className='profileName'>{props.userData.name}</p>
            <p className='profileMail'>{props.userData.email}</p>
          </div>
        </Link>
        <SettingsContainer
          onClick={async () => await signOut()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <motion.img
            whileHover={{ x: -5, scale: 1.1 }}
            src={logoutIcon}
            alt='settings-icon'
          />
        </SettingsContainer>
      </ProfileSection>
      <NavList>
        {routes.map(
          (route) =>
            route.nav && (
              <NavLink
                to={route.path}
                key={route.title}
                style={{ color: 'white' }}>
                {({ isActive }) => (
                  <NavItem
                    active={isActive}
                    color={route.color}
                    name={route.title}
                    icon={route.icon}
                  />
                )}
              </NavLink>
            )
        )}
      </NavList>
    </Sidebar>
  );
};

export const SideBarCollapsed = (props) => {
  return (
    <Sidebar
      {...props}
      initial={{ x: '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        transition: 'tween',
      }}>
      <ProfileSection>
        <a href='#profile'>
          <motion.img
            src={`${import.meta.env.VITE_SERVER_DOMAIN_NAME}${
              props.userData.photo
            }`}
            alt={props.userData.name}
            whileHover={{ scale: 1.1 }}
          />
        </a>
      </ProfileSection>
      <NavList>
        {routes.map(
          (route) =>
            route.nav && (
              <NavLink
                to={route.path}
                key={route.title}
                style={{ color: 'white' }}>
                {({ isActive }) => (
                  <NavItem
                    collapsed
                    active={isActive}
                    color={route.color}
                    name={route.title}
                    icon={route.icon}
                  />
                )}
              </NavLink>
            )
        )}
      </NavList>
    </Sidebar>
  );
};
