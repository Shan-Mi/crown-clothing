import { createSelector } from "reselect";

// 1. input select: doesn't use create selector
// 2. output select: does use input selectors and creates selector to build themselves

// take the whole state and select just piece of it, only one layer deep usually
// here we just want to get state's property cart
const selectCart = (state) => state.cart;

// export the property of cart, if we take multiple properties, then we have to make sure the second parameter is corresponsive with the first parameter.
// now it is a memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
