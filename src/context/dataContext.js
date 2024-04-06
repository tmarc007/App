import { createContext } from "react";

/**
 * Context is an interface / difinition of data
 * should not have implementations
 */
const DataContext = createContext ({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
