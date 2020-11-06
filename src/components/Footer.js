import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  height: 4rem;
  position: sticky;
  bottom: 5px;
  width: 100vw;
  font-family: "HandWriting";
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Owned by Rayne Boniedot</p>
      <p style={{ fontSize: "2rem", lineHeight: 0.8 }}>||</p>
      <p>Developed by Conner Matson</p>
    </StyledFooter>
  );
}
