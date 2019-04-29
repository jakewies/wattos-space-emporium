import React, { useState, useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  Layout,
  PageHeader,
  CartContext,
  ProductsContext,
  NoProducts,
  CartDetails,
  Button,
  Portal
} from '../components';

function Cart() {
  const { cart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  const [forceModalOpen, setForceModalOpen] = useState(false);
  const [creditsModalOpen, setCreditsModalOpen] = useState(false);

  const getProductsInCart = products => {
    return cart.length
      ? products.filter(({ id }) => cart.indexOf(id) > -1)
      : [];
  };

  const handleBuyWithCredits = () => {
    setCreditsModalOpen(true);
  };

  const handleUseForce = () => {
    setForceModalOpen(true);
  };

  return (
    <>
      <Head>
        <title>Cart | Watto's Space Emporium</title>
      </Head>
      <Layout>
        <>
          <PageHeader text="Cart" />
          {cart.length ? (
            <Container>
              <CartDetails products={getProductsInCart(products)} />
              <ButtonContainer>
                <ActionButton onClick={handleUseForce}>
                  Use The Force
                </ActionButton>
                <ActionButton onClick={handleBuyWithCredits} primary>
                  Buy With Republican Credits
                </ActionButton>
              </ButtonContainer>
            </Container>
          ) : (
            <NoProducts text="No products in cart" />
          )}
          {creditsModalOpen && (
            <Portal>
              <ModalContainer>
                <ModalContent>
                  <ModalText>
                    "Republic credits? Republic credits are no good out here. I
                    need something more real." - Watto
                  </ModalText>
                  <ModalActionsWrapper>
                    <ModalActionButton
                      onClick={() => setCreditsModalOpen(false)}
                    >
                      Try Again
                    </ModalActionButton>
                  </ModalActionsWrapper>
                </ModalContent>
              </ModalContainer>
            </Portal>
          )}
          {forceModalOpen && (
            <Portal>
              <ModalContainer>
                <ModalContent>
                  <ModalText>
                    "You think you're some kind of Jedi, waving your hand around
                    like that? I'm a Toydarian, mind tricks don't work on me." -
                    Watto
                  </ModalText>
                  <ModalActionsWrapper>
                    <ModalActionButton onClick={() => setForceModalOpen(false)}>
                      Try Again
                    </ModalActionButton>
                  </ModalActionsWrapper>
                </ModalContent>
              </ModalContainer>
            </Portal>
          )}
        </>
      </Layout>
    </>
  );
}

export default Cart;

const Container = styled.div`
  max-width: 1000px;
`;

const buttonBreakpoint = '600px';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  @media (min-width: ${buttonBreakpoint}) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const ActionButton = styled(Button)`
  width: 100%;

  &:first-of-type {
    margin-bottom: 1rem;
  }

  @media (min-width: ${buttonBreakpoint}) {
    max-width: 250px;

    &:first-of-type {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }

  ${({ primary = false, theme }) =>
    primary &&
    `
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.darkblue};
    }
    `};
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 95%;
  max-width: 600px;
  padding: 2rem 4rem;
  border-radius: 4px;
  background-color: #f3f4f4;
`;

const ModalText = styled.p`
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  font-style: italic;
  font-weight: 600;
`;

const ModalActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalActionButton = styled(Button)`
  max-width: 175px;
`;
