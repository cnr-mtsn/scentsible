import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import aboutLeaf from "../media/aboutLeaf.png";
import AboutCard from "../components/AboutCard";
import { data } from "../utils/data";

const StyledImage = styled.img`
  height: 110%;
  width: auto;
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 680px) {
    height: 90%;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1320px) {
    flex-direction: column;
    align-items: center;
  }
`;
export default function About() {
  return (
    <PageWrapper>
      <StyledImage src={aboutLeaf} />
      <Container>
        <AboutCard data={data.about.site} />
        <AboutCard data={data.about.owner} />
      </Container>
    </PageWrapper>
  );
}
