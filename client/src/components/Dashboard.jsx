import styled from 'styled-components';

import { SideBarCollapsed, SideBarExpanded } from './SideBar';
import { useAuth } from '../context/JWTAuthContext';
import { useEffect, useState } from 'react';
import BgContainer from './BgContainer';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.collapsed ? '325px' : '100px')} 1fr;
`;

const Container = styled.div`
  position: relative;
  width: 90%;
  margin: 2.5rem auto;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
`;

const Dashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const { currentUser } = useAuth();

  return (
    <>
      <BgContainer />
      <Wrapper collapsed={collapsed ? false : '325px'}>
        {collapsed ? (
          <SideBarCollapsed
            userData={currentUser}
            key='collapsed'
            onMouseEnter={() => setCollapsed(false)}
          />
        ) : (
          <SideBarExpanded
            userData={currentUser}
            key='expanded'
            onMouseLeave={() => setCollapsed(true)}
          />
        )}
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
};

export default Dashboard;
