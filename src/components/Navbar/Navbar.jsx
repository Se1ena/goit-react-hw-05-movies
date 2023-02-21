import React from 'react';
import {NavbarItem} from '../Navbar/Navbar.styled';
import {Wrapper} from '../Navbar/Navbar.styled';

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarItem to='/'>Home</NavbarItem>
      <NavbarItem to='/movies'>Movies</NavbarItem>
    </Wrapper>
  );
};

export default Navbar;