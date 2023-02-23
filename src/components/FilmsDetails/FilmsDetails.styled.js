import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 10px;

  margin-top: 16px;
  display: flex;
  align-items: flex-start;
`;

export const Poster = styled.img`
  width: 200px;
`;

export const WrapperDescription = styled.div`
padding: 20px;`;

export const Title = styled.h2`
margin: 0px;
margin-bottom: 16px;
font-weight: bold;`

export const Score = styled.p`
margin: 0px;
margin-bottom: 16px;`

export const Overview = styled.p`
font-size: 16px;
font-weight: bold;

margin: 0px;
margin-bottom: 16px;`

export const Genres = styled.p`
font-size: 14px;
font-weight: bold;

margin: 0px;
margin-bottom: 16px;`;

export const GenreElement = styled.span`
font-size: 14px;

margin: 0px;
margin: 0px 15px 15px 0px;`;

export const NavigationLink = styled(Link)`
  coursor: pointer;
  text-decoration: none;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 90px;
  height: 20px;

  margin-top: 15px;
  margin-right: 10px;
  margin-left: 15px;

  padding: 1px;

  background-color: #80808059;
  color: #000;
  border-radius: 2px;
  border: 1px solid grey;
`;

export const WrapperInfo = styled.div`
  display: flex;
  padding: 14px 30px;

  border-top: 2px solid;
  border-bottom: 2px solid;
`;

export const InformationLink = styled(Link)`
  coursor: pointer;

  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 15px;

  color: #000;
`;
