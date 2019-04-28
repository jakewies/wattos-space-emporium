import React from 'react';
import styled from 'styled-components';
import Detail from './Detail';

function ShipItem({ model, manufacturer, shipClass, credits }) {
  return (
    <Container>
      <ImageWrapper>IMAGE</ImageWrapper>
      <DetailsWrapper>
        <Detail label="Model" value={model} />
        <Detail label="Manufacturer" value={manufacturer} />
        <Detail label="Class" value={shipClass} />
        <Detail label="Credits" value={credits} />
      </DetailsWrapper>
      <ActionsWrapper>
        <ActionButton>Add To Order</ActionButton>
        <ActionButton>View Specs</ActionButton>
      </ActionsWrapper>
    </Container>
  );
}

export default ShipItem;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 1.5rem;
  grid-template-areas:
    'image details'
    'actions none';

  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  grid-area: image;

  /* dummy image */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 275px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const DetailsWrapper = styled.div`
  grid-area: details;

  display: flex;
  flex-direction: column;
`;

const ActionsWrapper = styled.div`
  grid-area: actions;

  display: flex;
`;

const ActionButton = styled.button`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.pillHeight};
  padding: 0 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 100px;
  cursor: pointer;
  outline: none;

  &:first-child {
    margin-right: 1rem;
  }
`;
