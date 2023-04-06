import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>
        <a href='/signin'>Sign In</a>
        <br />
        <a href='/signup'>Sign Up</a>
        <br />
        <a href='/dashboard'>Dashboard</a>
      </h1>
    </>
  );
};

export default Home;
