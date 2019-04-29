import styled from 'styled-components';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.pillHeight};
  padding: 0 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.lightgrey};
  opacity: 0.8;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  width: 100%;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  ${({ primary = false, secondary = false, theme }) =>
    primary
      ? `
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.darkblue};
    }
    `
      : secondary
      ? `
      background-color: ${theme.colors.white};
      border: 2px solid ${theme.colors.black};
      
      &:hover {
        background-color: transparent;
      }
    `
      : null}
`;
