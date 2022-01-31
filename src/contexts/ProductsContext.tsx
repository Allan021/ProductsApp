import {createContext} from 'react';
import {Producto} from '../interfaces/productInterfaces';

export type ProductContextProps = {
  product: Producto[];
  loadProducts: () => Promise<Producto[]>;
  loadProductbyId: (idProduct: string) => Promise<Producto>;
  updateProduct: (
    categoryId: string,
    productName: string,
    prodouctId: string,
  ) => Promise<void>;
  deleteProduct: (idProduct: string) => Promise<void>;
  createProduct: (categoryid: string, productName: string) => Promise<void>;
};

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({children}: any) => {
  const loadProducts = async () => {
    throw new Error('No Implemented');
  };
  const loadProductbyId = async () => {
    throw new Error('No Implemented');
  };
  const updateProduct = async () => {};
  const deleteProduct = async () => {};
  const createProduct = async () => {};

  return (
    <ProductContext.Provider
      value={{
        product: [],
        loadProducts,
        loadProductbyId,
        updateProduct,
        deleteProduct,
        createProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
