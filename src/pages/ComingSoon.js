import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import homeLeaf from "../media/homeLeaf.png";
import ComingSoonCard from "../components/ComingSoonCard";

const StyledImage = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  @media (max-width: 1100px) {
    height: 75%;
  }
  @media (max-width: 960px) {
    height: 50%;
  }
  @media (max-width: 720px) {
    height: 15%;
  }
`;
export default function ComingSoon() {
  return (
    <PageWrapper>
      <StyledImage src={homeLeaf} />
      <ComingSoonCard />
    </PageWrapper>
  );
}
