import { createContext } from "react";

// hidden & toggleHidden's value will got replaced by below local state value
/* <CartContext.Provider value={{
      hidden,
      toggleHidden
    }}> 
*/
const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});
// use an object to instantiate as the default value
// we want both the value that we want to hold and the function that update that value
// default value of function toggleHidden should be an empty function

export default CartContext;
