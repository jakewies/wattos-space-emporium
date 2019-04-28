import React from 'react';
import styled from 'styled-components';

const Detail = ({ label, value }) => (
  <StyledDetail>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </StyledDetail>
);

export default Detail;

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 0.25rem 0;
  font-size: 0.875rem;

  &:first-child {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-family: menlo, monospace, sans-serif;
  font-size: 0.875em;
  margin-bottom: 0.25em;
`;

const Value = styled.span`
  font-size: 1.5em;
  font-weight: 700;
`;
