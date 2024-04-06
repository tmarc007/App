import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);

  function addProductToCart(prod) {
    console.log("Global fn");

    var copy = [...cart];
    copy.push(prod);
    setCart(copy);
    // setCart([...cart, prod]);    This line is the same as lines 10, 11, and 12.
  }

  function removeProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
