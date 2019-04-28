import React from 'react';
import styled from 'styled-components';

function PageHeader({ text }) {
  return <H1>{text}</H1>;
}

export default PageHeader;

const H1 = styled.h1`
  font-size: 2.667rem;
  margin-bottom: 2rem;
`;
