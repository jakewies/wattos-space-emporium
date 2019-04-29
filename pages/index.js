import React, { useState, useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  Layout,
  PageHeader,
  Select,
  NoProducts,
  InventoryList,
  ProductsContext
} from '../components';
import { getClasses, getManufacturers } from '../lib/utils';

const ALL = 'All';

function Inventory() {
  const { products } = useContext(ProductsContext);
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
      </Head>
      <Layout>
        <PageHeader text="Inventory" />
        <Toolbar>
          <Select
            label="Class"
            options={[ALL, ...classOptions]}
            defaultValue={classFilter}
            onSelect={value => setClassFilter(value)}
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
          <NoProducts />
        )}
      </Layout>
    </>
  );
}

export default Inventory;

const toolbarBreakpoint = '650px';

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div:first-of-type {
    margin-bottom: 1rem;
  }

  @media (min-width: ${toolbarBreakpoint}) {
    flex-direction: row;
    align-items: center;

    > div:first-of-type {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;

const ResultCount = styled.div`
  display: none;

  @media (min-width: 950px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  > span {
    display: flex;
    align-items: center;
    height: ${({ theme }) => theme.pillHeight};
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 100px;
    font-weight: 600;
    font-size: 12px;
  }
`;
