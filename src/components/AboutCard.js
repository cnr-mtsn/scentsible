import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${props => props.theme.colors.grey};
  width: 40rem;
  height: auto;
  padding: 3rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "HandWriting";
    font-size: 5rem;
    margin: 0;
    padding: 0;
    font-weight: 200;
  }
  p {
    font-family: "cmuSerif";
    font-size: 1.3rem;
    margin-top: -1rem;
    width: 35rem;
    text-align: left;
  }
  @media (max-width: 1320px) {
    width: 35rem;
  }
  @media (max-width: 950px) {
    width: 30rem;
    p {
      width: 28rem;
    }
  }
  @media (max-width: 680px) {
    width: 20rem;
    p {
      width: 20rem;
    }
  }
`;

export default function AboutCard({ data }) {
  return (
    <Container>
      <h3 onClick={() => alert(data.title)}>{data.title}</h3>
      <p>{data.info}</p>
    </Container>
  );
}
