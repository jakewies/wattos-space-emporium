import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import FullScreenLoading from './fullscreen-loading';

const FIREBASE_DATABASE_URL =
  'https://wattos-spaceship-emporium.firebaseio.com';

export const ProductsContext = createContext([]);
export const ProductsConsumer = ProductsContext.Consumer;

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${FIREBASE_DATABASE_URL}/products.json`
      );
      setProducts(
        Object.keys(data).map(productId => ({
          ...data[productId],
          id: parseInt(productId)
        }))
      );
    } catch (err) {
      console.error(err);
      setProducts([]);
    }
    setFetching(false);
  };

  const getProductById = id =>
    products.find(product => parseInt(product.id) === parseInt(id));

  useEffect(() => {
    getProducts();
  }, []);

  if (fetching) {
    return <FullScreenLoading text="Loading Emporium Archive..." />;
  }

  return (
    <ProductsContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
}
