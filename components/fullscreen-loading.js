import React from 'react';
import styled from 'styled-components';

const FullScreenLoading = ({ text = 'Loading' }) => (
  <Container>
    <h1>{text}</h1>
  </Container>
);

export default FullScreenLoading;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: menlo, monospace, sans-serif;

  > h1 {
    font-size: 1.5rem;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
