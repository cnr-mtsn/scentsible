import React from "react";
import styled from "styled-components";
import logo from "../media/logo.png";

// import { Link } from "react-router-dom";
import Footer from "./Footer";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  height: 11rem;
  align-items: center;
  a {
    padding: 1rem;
    color: ${props => props.theme.colors.black};
    text-transform: lowercase;
    letter-spacing: 1.2;
    font-family: "CMU Serif";
    font-size: 1.4rem;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Nav = () => (
  <StyledNav>
    {/* <Link to='/'>
      <a style={{ marginRight: "5rem" }}>home</a>
    </Link> */}
    <StyledImage src={logo} />
    {/* <Link to='/about'>
      <a style={{ marginLeft: "5rem" }}>about</a>
    </Link> */}
  </StyledNav>
);

const StyledContainer = styled.div``;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledImage = styled.img`
  height: 100%;
  width: auto;
  margin: 0;
  padding: 0;
`;

export default function PageWrapper(props) {
  return (
    <Container>
      <Nav />
      {props.children}
      <Footer />
    </Container>
  );
}
