import React from 'react';
import Head from 'next/head';
import { Layout, PageHeader } from '../components';

function Inventory() {
  return (
    <>
      <Head>
        <title>Inventory | Watto's Space Emporium</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <PageHeader text="Inventory" />
      </Layout>
    </>
  );
}

export default Inventory;
