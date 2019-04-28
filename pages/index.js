import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  Layout,
  PageHeader,
  Select,
  InventoryList,
  Loading
} from '../components';
import firebase from '../lib/firebase';

function Inventory() {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const products = firebase.database().ref('products');
    products.on('value', snap => {
      const data = snap.val();

      setInventory(
        Object.keys(data).map(id => ({
          ...data[id],
          id: parseInt(id)
        }))
      );
    });

    return () => {
      products.off();
    };
  }, []);

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
        {inventory.length ? <InventoryList data={inventory} /> : <Loading />}
      </Layout>
    </>
  );
}

export default Inventory;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
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
