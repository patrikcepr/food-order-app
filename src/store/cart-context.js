import React from 'react';

const CartContext = React.createContext({
  cart: [
    {
      id: null,
      name: null,
      price: 0,
      amount: 0,
      total: 0,
    },
  ],
  onSubmit: (amount, id) => {},
});

export default CartContext;

// export const CartContextProvider = (props) => {
//   return (
//     <CartContext.Provider
//       value={{
//         id: props.id,
//         name: props.name,
//         price: props.price,
//         amount: props.amount,
//       }}
//     >
//       {props.children}
//     </CartContext.Provider>
//   );
// };
