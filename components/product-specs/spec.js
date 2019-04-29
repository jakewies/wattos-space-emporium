import React from 'react';
import styled from 'styled-components';

const Spec = ({ label, value }) => (
  <StyledSpec>
    <LabelContainer>
      <Label>{label}</Label>
    </LabelContainer>

    <Value>{value}</Value>
  </StyledSpec>
);

export default Spec;

const StyledSpec = styled.div`
  display: flex;
  font-size: 0.875rem;
`;

const LabelContainer = styled.div`
  flex: 1;
  position: relative;
  border-bottom: 0.25em dotted ${({ theme }) => theme.colors.black};
`;

const Text = styled.span`
  font-family: menlo, monospace, sans-serif;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Label = styled(Text)`
  position: absolute;
  padding: 1px;
  font-weight: 600;
`;

const Value = styled(Text)`
  font-weight: 500;
`;
