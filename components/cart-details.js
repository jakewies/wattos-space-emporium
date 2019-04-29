import React from 'react';
import styled from 'styled-components';
import Detail from './detail';

const CartDetails = ({ products }) => (
  <Container>
    {products.map(product => (
      <ProductWrapper key={product.id}>
        <Detail
          label="Product"
          value={`${product.manufacturer} - ${product.name}`}
        />
        <CreditsWrapper>
          <Detail label="Credits" value={product.cost_in_credits} />
        </CreditsWrapper>
      </ProductWrapper>
    ))}
  </Container>
);

export default CartDetails;

const Container = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.grey};
`;

const ProductWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  > div {
    margin-right: 2rem;
  }

  > div:last-child {
    margin-right: 0;
  }
`;

const CreditsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
