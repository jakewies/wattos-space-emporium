import React from 'react';
import styled from 'styled-components';

const NoProducts = ({ text = 'No Products Found' }) => (
  <Container>
    <span>{text}</span>
  </Container>
);

export default NoProducts;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;

  > span {
    font-size: 2rem;
    font-weight: 400;
    font-family: menlo, monospace, sans-serif;
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
  }
`;
