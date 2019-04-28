import React from 'react';
import styled from 'styled-components';
import ShipItem from './ship-item';

const InventoryList = ({ data }) => (
  <StyledInventoryList>
    <InventoryListItem>
      {data.map(spaceship => (
        <ShipItem
          key={spaceship.id}
          model={spaceship.name}
          manufacturer={spaceship.manufacturer}
          shipClass={spaceship.class}
          credits={spaceship.cost_in_credits}
        />
      ))}
    </InventoryListItem>
  </StyledInventoryList>
);

export default InventoryList;

const StyledInventoryList = styled.div`
  padding: 2rem 0;
`;

const InventoryListItem = styled.div``;
