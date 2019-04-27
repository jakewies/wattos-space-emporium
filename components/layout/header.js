import React from 'react';
import styled from 'styled-components';
import { FaDatabase, FaRocket } from 'react-icons/fa';

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <FaRocket />
        <h1>Watto's Spaceship Emporium</h1>
      </Logo>
      <CartIcon>
        <FaDatabase />
      </CartIcon>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  border: 6px solid ${({ theme }) => theme.colors.black};
  border-radius: 100px;
  padding: 1.5rem 2rem;

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
  border-radius: 100px;
  cursor: pointer;
  padding: 1rem;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  > svg {
    height: 2rem;
    width: 2rem;
  }
`;
