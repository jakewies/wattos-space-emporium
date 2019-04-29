import styled from 'styled-components';

export default styled.button`
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
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgrey};
  }
`;
