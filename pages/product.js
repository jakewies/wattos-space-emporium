import React, { useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  ProductSpecs,
  Layout,
  PageHeader,
  ProductsContext,
  CartContext
} from '../components';

Product.getInitialProps = async ({ query }) => {
  return { id: parseInt(query.id) };
};

function Product({ id }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { getProductById } = useContext(ProductsContext);
  const product = getProductById(id) || null;
  const inCart = cart.indexOf(id) > -1;

  const handleActionClick = () => {
    if (inCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <>
      <Head>
        <title>
          {product ? product.name : 'Product'} | Watto's Space Emporium
        </title>
      </Head>
      <Layout>
        {product ? (
          <>
            <PageHeader text={product.name} />
            <ProductSpecs product={product} />
            <ButtonContainer>
              <ActionButton onClick={handleActionClick}>
                {inCart ? 'Remove From Cart' : 'Add To Cart'}
              </ActionButton>
            </ButtonContainer>
          </>
        ) : (
          <div>Product Not found</div>
        )}
      </Layout>
    </>
  );
}

export default Product;

const ButtonContainer = styled.div`
  display: flex;
  margin: 2rem 0;

  @media (min-width: 850px) {
    justify-content: flex-end;
  }
`;

const ActionButton = styled.button`
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
  width: 100%;
  max-width: 400px;
`;
