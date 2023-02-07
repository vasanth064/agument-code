import styled from 'styled-components';
import { motion } from 'framer-motion';

const Item = styled(motion.li)`
  padding: 1rem 1rem 1rem 1rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & > div {
    display: flex;
    place-items: center;
    background-color: ${(props) => props.color};
    padding: 7.5px;
    width: fit-content;
    border-radius: 15px;
  }
  & > p {
    font-size: 1.2rem;
    font-weight: 400;
  }
  &::after {
    content: '';
    position: absolute;
    width: 85%;
    border-radius: 50%;
    height: 2px;
    background-color: #403d50;
    bottom: 0;
    left: 0;
  }
  &:hover {
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
  }
  &:hover::before {
    content: '';
    position: absolute;
    width: 0.25rem;
    height: 100%;
    left: 0;
    background-color: ${(props) => props.color};
  }
`;

const NavItemAnimationParent = {
  initial: {
    backgroundColor: '#1f1d2c',
  },
  hover: {
    backgroundColor: 'rgba(40, 42, 57, 0.9)',
  },
};
const NavItemAnimationImg = {
  hover: {
    scale: 1.2,
  },
  tap: {
    x: 25,
  },
};
const NavItemAnimationText = {
  hover: {
    scale: 1.1,
  },
  tap: {
    x: 25,
  },
};

const NavItem = ({ icon, name, color, active }) => {
  return (
    <Item
      className={active ? 'activeNavItem' : ''}
      color={color}
      style={{ '--background': color }}
      whileHover='hover'
      initial='initial'
      whileTap='tap'
      variants={NavItemAnimationParent}>
      <motion.div variants={NavItemAnimationImg}>
        <img src={icon} alt='icon' />
      </motion.div>
      <motion.p variants={NavItemAnimationText}>{name}</motion.p>
    </Item>
  );
};

export default NavItem;
