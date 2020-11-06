import React from "react";
import styled from "styled-components";
import logo from "../media/logo.png";

import { Link } from "react-router-dom";
// import Footer from "./Footer";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  height: 11rem;
  align-items: center;
  button {
    padding: 1rem;
    color: ${props => props.theme.colors.black};
    text-transform: lowercase;
    letter-spacing: 1.2;
    font-family: "cmuSerif";
    font-size: 1.4rem;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background: none;
    &:hover {
      text-decoration: underline ${props => props.theme.colors.green};
    }
  }
  @media (max-width: 1024px) {
    button {
      display: none;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        zIndex: 3,
        margin: 0,
        padding: 0,
      }}
    >
      <Link to='/'>
        <button style={{ marginRight: "5rem" }}>home</button>
      </Link>
      <Link to='/'>
        <StyledImage src={logo} />
      </Link>
      <Link to='/about'>
        <button style={{ marginLeft: "5rem" }}>about</button>
      </Link>
    </div>
  </StyledNav>
);

const StyledContainer = styled.div``;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledImage = styled.img`
  height: 10rem;
  width: auto;
  margin: 0;
  padding: 0;
  @media (max-width: 1024px) {
    height: 8rem;
  }
  @media (max-width: 720px) {
    height: 6rem;
    margin-bottom: 3rem;
  }
`;

export default function PageWrapper(props) {
  return (
    <Container>
      <Nav />
      {props.children}
      {/* <Footer /> */}
    </Container>
  );
}
