import React, { useEffect } from 'react';
import { useAuth } from '../context/JWTAuthContext';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const MessageContainer = styled(motion.span)`
  position: absolute;
  bottom: 0;
  z-index: 5;
  background: #5c538c;
  border: 2.5px solid #c14d3e;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
`;

const Message = () => {
  const { error, handleError } = useAuth();
  console.log(error);
  useEffect(() => {
    setTimeout(() => {
      handleError(null);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {error && (
        <MessageContainer
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '-50%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}>
          {error.message}
        </MessageContainer>
      )}
    </AnimatePresence>
  );
};

export default Message;
