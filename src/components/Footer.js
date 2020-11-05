import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  font-family: "HandWriting";
  font-size: 2rem;
  height: 4rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Owned by Rayne Boniedot</p>

      <p>Developed by Conner Matson</p>
    </StyledFooter>
  );
}
