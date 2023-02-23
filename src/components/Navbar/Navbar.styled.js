import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarItem = styled(NavLink)`
color: #333;
font-weight: 500;
text-decoration: none;
margin: 16px;
user-select: none;
&.active {
  color: tomato;
}
:hover:not(.active),
:focus-visible:not(.active) {
  text-decoration: underline;
}`;

export const Wrapper = styled.div`
box-shadow: rgb(0 0 0 / 30%) 0px 0px 8px;

padding-top: 15px;
padding-bottom: 15px;`