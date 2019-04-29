import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Detail from '../detail';
import { CartContext } from '../cart-context';
import Button from '../button';

function ShipItem({ id, model, manufacturer, shipClass, credits, inCart }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
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
          {inCart ? (
            <ActionButton onClick={handleRemoveFromCart}>
              Remove From Cart
            </ActionButton>
          ) : (
            <ActionButton onClick={handleAddToCart} primary>
              Add To Cart
            </ActionButton>
          )}
          <Link prefetch href={`/product?id=${id}`}>
            <ActionButton>View Specs</ActionButton>
          </Link>
        </ActionsWrapper>
      </DetailsWrapper>
    </Container>
  );
}

export default ShipItem;

const mobileBreakpoint = '850px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-bottom: 4rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  @media (min-width: ${mobileBreakpoint}) {
    flex-direction: row;
    max-width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 0 2rem 2rem;

  > img {
    width: 100%;
  }

  @media (min-width: ${mobileBreakpoint}) {
    width: 40%;
    margin-bottom: 0;
    margin-right: 2rem;
    padding: 0;

    > img {
      width: 100%;
      max-width: 450px;
    }
  }
`;

const DetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 2rem 0;

  > div {
    margin-bottom: 1.5rem;
    padding: 0.5rem;
  }

  > div:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }

  > div:last-child {
    margin-bottom: 0;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
`;

const ActionButton = styled(Button)`
  flex-basis: 50%;
  max-width: 175px;

  &:first-child {
    margin-right: 1rem;
  }
`;
