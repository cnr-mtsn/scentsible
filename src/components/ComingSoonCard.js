import React from "react";
import styled from "styled-components";

const StyledComingSoon = styled.div`
  background: ${props => props.theme.colors.grey};
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  z-index: 1;

  .inner {
    max-height: 100%;
    width: 45rem;
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }

  h1 {
    font-family: "Handwriting";
    font-size: 6rem;
    font-weight: 200;
    letter-spacing: 2.5px;
    margin: 0;
    padding: 0;
    align-self: center;
    line-height: -2;
  }

  p {
    font-size: 1.2rem;
    letter-spacing: 2px;
    width: 25rem;
    align-self: flex-end;
    margin-top: -3rem;
    font-family: "cmuSerif";
  }
  @media (max-width: 768px) {
    justify-content: center;
    .inner {
      width: 20rem;
    }
    h1 {
      font-size: 3rem;
    }
    p {
      margin-top: 0;
      text-align: center;
      font-size: 1rem;
      width: 20rem;
    }
  }
`;

export default function ComingSoonCard(props) {
  return (
    <StyledComingSoon>
      <div className='inner'>
        <h1>coming Fall 2021</h1>
        <p>
          clean burning candles, conscious hand soaps and more delivered to your
          door with the scents of the seasons in mind.
        </p>
      </div>
    </StyledComingSoon>
  );
}
