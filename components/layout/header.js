import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaDatabase, FaRocket } from 'react-icons/fa';
import { CartContext } from '../cart-context';

function Header() {
  const { cartCount } = useContext(CartContext);

  return (
    <StyledHeader>
      <Logo>
        <FaRocket />
        <h1>Watto's Spaceship Emporium</h1>
      </Logo>
      <CartIcon count={cartCount}>
        <FaDatabase />
      </CartIcon>
    </StyledHeader>
  );
}

export default Header;

const mobileBreakpoint = '650px';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  border: 4px solid ${({ theme }) => theme.colors.black};
  border-radius: 100px;
  padding: 0.875rem 1rem;

  @media (min-width: ${mobileBreakpoint}) {
    padding: 1.5rem 2rem;
    border: 6px solid ${({ theme }) => theme.colors.black};
  }

  > svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.875rem;
  }

  > h1 {
    font-size: 2rem;
    letter-spacing: -2px;
  }
`;

const CartIcon = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  > svg {
    height: 2rem;
    width: 2rem;
  }

  ${({ count, theme }) =>
    count &&
    `
    &::after {
      content: '${count}';
      position: absolute;
      top: 7px;
      right: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      font-weight: 600;
      font-size: 0.75rem;
      background-color: ${theme.colors.blue};
      border-radius: 100px;
      color: ${theme.colors.white};
      border: 2px solid ${theme.colors.white};
    }
  `}
`;
