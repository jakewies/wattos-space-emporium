import React from 'react';
import styled from 'styled-components';
import Detail from './Detail';

const ShipItem = ({ id, model, manufacturer, shipClass, credits }) => (
  <Container>
    <ImageWrapper>
      <img src={`/static/images/products/${id}/thumbnail.jpg`} alt={model} />
    </ImageWrapper>
    <DetailsWrapper>
      <Detail label="Model" value={model} />
      <Detail label="Manufacturer" value={manufacturer} />
      <Detail label="Class" value={shipClass} />
      <Detail label="Credits" value={credits} />
      <ActionsWrapper>
        <ActionButton>Add To Order</ActionButton>
        <ActionButton>View Specs</ActionButton>
      </ActionsWrapper>
    </DetailsWrapper>
  </Container>
);

export default ShipItem;

const Container = styled.div`
  display: flex;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  margin-right: 2rem;

  > img {
    max-width: 450px;
  }
`;

const DetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ActionsWrapper = styled.div`
  display: flex;
`;

const ActionButton = styled.button`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 175px;
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
