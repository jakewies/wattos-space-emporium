import React, { useState, useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  Layout,
  PageHeader,
  Select,
  InventoryList,
  ProductsContext
} from '../components';
import { getClasses, getManufacturers } from '../lib/utils';

const ALL = 'All';

function Inventory() {
  const products = useContext(ProductsContext);
  const [classFilter, setClassFilter] = useState(ALL);
  const [manufacturerFilter, setManufacturerFilter] = useState(ALL);

  const classOptions = getClasses(products);
  const manufacturerOptions = getManufacturers(products);

  const filteredProducts = products.filter(product => {
    if (classFilter !== ALL && product.class !== classFilter) {
      return false;
    }

    if (
      manufacturerFilter !== ALL &&
      product.manufacturer !== manufacturerFilter
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
            <span>Showing {filteredProducts.length} results</span>
          </ResultCount>
        </Toolbar>
        {filteredProducts.length ? (
          <InventoryList data={filteredProducts} />
        ) : (
          <NoProducts>
            <span>No products found</span>
          </NoProducts>
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

const NoProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;

  > span {
    font-size: 2rem;
    font-weight: 400;
    font-family: menlo, monospace, sans-serif;
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
  }
`;
