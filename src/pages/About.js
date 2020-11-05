import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import homeLeaf from "../media/homeLeaf.png";
import ComingSoonCard from "../components/ComingSoonCard";

const StyledImage = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  top: 2px;
  left: 0;
`;
export default function About() {
  return (
    <PageWrapper>
      <StyledImage src={homeLeaf} />
      <ComingSoonCard />
    </PageWrapper>
  );
}
