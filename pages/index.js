import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout, PageHeader, Select, ShipItem } from '../components';

function Inventory() {
  return (
    <>
      <Head>
        <title>Inventory | Watto's Space Emporium</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <PageHeader text="Inventory" />
        <Toolbar>
          <Select
            label="Class"
            options={['Starfighter', 'Light freighter', 'Transport shuttle']}
            onSelect={value => console.log(value)}
            style={{ marginRight: '1rem' }}
          />
          <Select
            label="Manufacturer"
            options={[
              'Sienar Fleet Systems',
              'Incom Corporation',
              'Koensayr Manufacturing',
              'Corellian Engineering Corporation',
              'Cygnus Spaceworks',
              'Alliance Underground Engineering',
              'Gial Ackbar'
            ]}
            onSelect={value => console.log(value)}
          />
          <ResultCount>
            <span>Showing 8 results</span>
          </ResultCount>
        </Toolbar>
        <InventoryList>
          <InventoryListItem>
            <ShipItem
              model={'Twin Ion Engine Starfighter'}
              manufacturer={'Sienar Fleet Systems'}
              shipClass={'Starfighter'}
              credits={'1,143,350,000'}
            />
          </InventoryListItem>
        </InventoryList>
      </Layout>
    </>
  );
}

export default Inventory;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const ResultCount = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  > span {
    display: flex;
    align-items: center;
    height: ${({ theme }) => theme.pillHeight};
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 100px;
    font-weight: 600;
    font-size: 14px;
  }
`;

const InventoryList = styled.div``;

const InventoryListItem = styled.div``;
