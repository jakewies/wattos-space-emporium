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
import { getClasses, getManufacturers } from '../lib/utils';

const ALL = 'All';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [classFilter, setClassFilter] = useState(ALL);
  const [manufacturerFilter, setManufacturerFilter] = useState(ALL);

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

  const classOptions = getClasses(inventory);
  const manufacturerOptions = getManufacturers(inventory);
  const filteredInventory = inventory.filter(spaceship => {
    if (classFilter !== ALL && spaceship.class !== classFilter) {
      return false;
    }

    if (
      manufacturerFilter !== ALL &&
      spaceship.manufacturer !== manufacturerFilter
    ) {
      return false;
    }

    return true;
  });

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
            options={[ALL, ...classOptions]}
            defaultValue={classFilter}
            onSelect={value => setClassFilter(value)}
            style={{ marginRight: '1rem' }}
          />
          <Select
            label="Manufacturer"
            options={[ALL, ...manufacturerOptions]}
            defaultValue={manufacturerFilter}
            onSelect={value => setManufacturerFilter(value)}
          />
          <ResultCount>
            <span>Showing 8 results</span>
          </ResultCount>
        </Toolbar>
        {inventory.length ? (
          <InventoryList data={filteredInventory} />
        ) : (
          <Loading />
        )}
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
