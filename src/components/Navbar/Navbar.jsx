import React from 'react';
import NavbarItem from './Navbar.styled';
import Wrapper from '../../Wrapper.styled';

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarItem to='/'>Home</NavbarItem>
      <NavbarItem to='/movies'>Movies</NavbarItem>
    </Wrapper>
  );
};

export default Navbar;