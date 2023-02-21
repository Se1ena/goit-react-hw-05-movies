import React, { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

import { Wrapper } from 'components/Wrapper.styled';

const Layout = () => {
  return (
    <Wrapper bg='#B0E1DB' p='20px'>
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;