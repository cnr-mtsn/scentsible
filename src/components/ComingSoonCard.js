import React from "react";
import styled from "styled-components";

const StyledComingSoon = styled.div`
  background: ${props => props.theme.colors.grey};
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;

  h1 {
    font-family: "Handwriting";
    font-size: 9rem;
    font-weight: 200;
    letter-spacing: 2.5px;
  }
  .header {
    align-self: flex-end;
    position: absolute;
    margin: 0rem 32rem 3rem 0;
  }
  .paragraph {
    width: 25rem;

    align-self: center;
    margin: 4rem 0 0 24rem;
  }
  p {
    font-size: 1.3rem;
    font-family: "CMU Serif";
    letter-spacing: 2px;
  }
`;

export default function ComingSoonCard(props) {
  return (
    <StyledComingSoon>
      <div className='header'>
        <h1>coming Fall 2021</h1>
      </div>
      <div className='paragraph'>
        <p>
          clean burning candles, conscious hand soaps and more delivered to your
          door with the scents of the seasons in mind.
        </p>
      </div>
    </StyledComingSoon>
  );
}
