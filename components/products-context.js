import React, { useState, useEffect, createContext } from 'react';
import FullScreenLoading from './fullscreen-loading';
import firebase from '../lib/firebase';

export const ProductsContext = createContext([]);
export const ProductsConsumer = ProductsContext.Consumer;

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = firebase.database().ref('products');

    productsRef.on('value', snapshot => {
      const productsMap = snapshot.val();

      setProducts(
        Object.keys(productsMap).map(productId => ({
          ...productsMap[productId],
          id: parseInt(productId)
        }))
      );
    });

    return () => {
      productsRef.off();
    };
  }, []);

  if (!products.length) {
    return <FullScreenLoading text="Loading Emporium Archive..." />;
  }

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
