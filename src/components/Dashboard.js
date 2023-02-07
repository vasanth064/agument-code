import styled from 'styled-components';
import profilePic from './../assets/profile-pic.png';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import settingsIcon from './../assets/settings.svg';
import routes from '../helpers/routes';
import { Link } from 'react-router-dom';

const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: rgba(38, 40, 55, 0.9);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
`;
const Blob = styled(motion.svg)`
  height: auto;
  width: 500px;
  position: absolute;
  top: ${(props) => props.top}rem;
  left: ${(props) => props.left}rem;
`;
const Sidebar = styled(motion.nav)`
  height: 100vh;
  width: 325px;
  position: sticky;
  top: 0;
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
const Wrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
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
const SettingsContainer = styled(Link)`
  display: flex;
  place-items: center;
  background-color: #403d50;
  padding: 7.5px;
  border-radius: 15px;
`;
const NavList = styled.ul`
  margin: 1rem 0;
`;

const Container = styled.div`
  margin: 2.5rem 1rem 1rem 2.5rem;
  max-width: 80vw;
`;

const Dashboard = ({ children }) => {
  return (
    <>
      <div name='bg' style={{ position: 'absolute' }}>
        <div>
          {/* watch top and left as it might bring overflow*/}
          <Blob
            viewBox='0 0 200 200'
            top='30'
            left='15'
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{
              duration: 15,
              repeat: 'Infinity',
              repeatType: 'mirror',
            }}>
            <path
              fill='#3BB8FF'
              d='M34.2,-56.5C46.3,-45.4,59.4,-39.3,63.8,-29.3C68.2,-19.2,63.9,-5.3,63.8,10.6C63.7,26.5,67.9,44.5,61.7,55.6C55.4,66.7,38.8,71,22.1,76.3C5.5,81.6,-11.1,88,-25.2,84.4C-39.2,80.9,-50.7,67.4,-59,53.5C-67.4,39.6,-72.7,25.4,-73.7,11.3C-74.6,-2.9,-71.2,-16.9,-63.9,-27.6C-56.6,-38.3,-45.3,-45.6,-34,-57.1C-22.7,-68.6,-11.3,-84.2,-0.2,-84C11,-83.7,22.1,-67.6,34.2,-56.5Z'
              transform='translate(100 100)'
            />
          </Blob>
          <Blob
            viewBox='0 0 200 200'
            top='1'
            left='80'
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{
              delay: 2,
              duration: 15,
              repeat: 'Infinity',
              repeatType: 'mirror',
            }}>
            <path
              fill='#3BB8FF'
              d='M55.1,-50.5C70.7,-39.6,82,-19.8,81.6,-0.4C81.1,18.9,68.9,37.8,53.3,50.4C37.8,63.1,18.9,69.6,1.4,68.2C-16,66.7,-32.1,57.4,-46.9,44.7C-61.7,32.1,-75.2,16,-78.9,-3.6C-82.5,-23.3,-76.1,-46.5,-61.3,-57.5C-46.5,-68.5,-23.3,-67.1,-1.7,-65.4C19.8,-63.6,39.6,-61.5,55.1,-50.5Z'
              transform='translate(100 100)'
            />
          </Blob>
        </div>
        <BgContainer />
      </div>
      <Wrapper>
        <Sidebar
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'tween',
          }}>
          <ProfileSection>
            <a href='#profile'>
              <motion.img
                src={profilePic}
                alt='profile name'
                whileHover={{ scale: 1.1 }}
              />
              <div>
                <p className='profileName'>Vasanth V V</p>
                <p className='profileMail'>vasanthvdev@gmail.com</p>
              </div>
            </a>
            <motion.SettingsContainer
              to='/settings'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <motion.img
                whileHover={{ rotate: '45deg' }}
                src={settingsIcon}
                alt='settings-icon'
              />
            </motion.SettingsContainer>
          </ProfileSection>
          <NavList>
            {routes.map(
              (route) =>
                route.nav && (
                  <Link
                    to={route.path}
                    key={route.title}
                    style={{ color: 'white' }}>
                    <NavItem
                      color={route.color}
                      name={route.title}
                      icon={route.icon}
                    />
                  </Link>
                )
            )}
          </NavList>
        </Sidebar>
        <div>
          <Container>{children}</Container>
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;
