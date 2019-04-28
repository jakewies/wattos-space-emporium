import React from 'react';
import styled from 'styled-components';

const Loading = () => (
  <Container>
    <Text>Loading inventory from intergalactic web...</Text>
  </Container>
);

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  font-size: 2rem;
`;

const Text = styled.span`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 0.5rem;
`;
