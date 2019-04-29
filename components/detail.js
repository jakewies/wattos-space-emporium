import React from 'react';
import styled from 'styled-components';

const Detail = ({ label, value, highlighted = false }) => (
  <StyledDetail highlight={highlighted}>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </StyledDetail>
);

export default Detail;

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0;
  font-size: 0.875rem;

  ${({ highlight, theme }) =>
    highlight &&
    `
  &:first-child {
    background-color: ${theme.colors.grey};
  }
  `}
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
