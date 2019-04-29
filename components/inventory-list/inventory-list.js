import React, { useContext } from 'react';
import styled from 'styled-components';
import ShipItem from './ship-item';
import { CartContext } from '../cart-context';

function InventoryList({ data }) {
  const { cart } = useContext(CartContext);

  return (
    <StyledInventoryList>
      <InventoryListItem>
        {data.map(spaceship => (
          <ShipItem
            key={spaceship.id}
            id={spaceship.id}
            model={spaceship.name}
            manufacturer={spaceship.manufacturer}
            shipClass={spaceship.class}
            credits={spaceship.cost_in_credits}
            inCart={cart.indexOf(spaceship.id) > -1}
          />
        ))}
      </InventoryListItem>
    </StyledInventoryList>
  );
}

export default InventoryList;

const StyledInventoryList = styled.div`
  padding: 2rem 0;
`;

const InventoryListItem = styled.div``;
