import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

function Select({
  label = null,
  options = [],
  onSelect = null,
  defaultValue = '',
  ...styledProps
}) {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = event => {
    const { value } = event.target;

    setSelected(value);

    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <Container {...styledProps}>
      {label && <Label htmlFor={`${label}--select`}>{label}</Label>}
      <SelectWrapper withLabel={label}>
        <StyledSelect
          id={`${label}--select`}
          onChange={handleChange}
          value={selected}
        >
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
        <ArrowIcon>
          <FaAngleDown />
        </ArrowIcon>
      </SelectWrapper>
    </Container>
  );
}

export default Select;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${({ theme }) => theme.pillHeight};
  font-size: 0.875rem;
  user-select: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1em;
  font-weight: 600;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: 4px solid ${({ theme }) => theme.colors.black};
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  user-select: none;
  white-space: nowrap;
  outline: none;
  border: 4px solid ${({ theme }) => theme.colors.black};
  ${({ withLabel }) =>
    withLabel
      ? `border-top-right-radius: 100px; border-bottom-right-radius: 100px;margin-left: -4px;`
      : 'border-radius: 100px'};
`;

const iconWidth = '1.2em';

const StyledSelect = styled.select`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1em;
  font-weight: 600;
  height: 100%;
  padding-right: calc(1em + ${iconWidth} + 0.75em);
  padding-left: 1em;
  -webkit-appearance: none;
  box-shadow: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 0;
  background: none transparent;
  outline: none;
`;

const ArrowIcon = styled.div`
  position: absolute;
  right: 1em;
  height: ${iconWidth};
  width: ${iconWidth};
  pointer-events: none;

  > svg {
    position: absolute;
    bottom: -2px;
    height: ${iconWidth};
    width: ${iconWidth};
  }
`;
