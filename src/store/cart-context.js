import React, { useState } from 'react';

import DUMMY_MEALS from '../components/Meals/dummy_meals';

const CartContext = React.createContext({
  cart: [],
  totalAmount: 0,
  addItem: (id) => {},
  removeItem: (item) => {},
});

export default CartContext;

const updateAmount = (arr) => {
  let total = 0;
  arr.forEach((obj) => (total += +obj.amount));
  return total;
};

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const showCartHandler = () => {
    setModalVisible(true);
  };

  const resetModalHandler = () => {
    setModalVisible(false);
  };

  const addMealHandler = (amount, id) => {
    // identify the meal and get complete object
    let selectedMeal = DUMMY_MEALS.find((meal) => meal.id === id);
    // add amount of meals
    selectedMeal = { ...selectedMeal, amount: +amount };
    // get total amount of meals
    setTotalAmount((prevState) => {
      return prevState + +amount;
    });
    // check if the meal is already in cart
    if (cart.length > 0) {
      let objIndex = cart.findIndex((obj) => obj.id === id);
      if (objIndex >= 0) {
        cart[objIndex].amount += +amount;
      } else {
        setCart((prevState) => {
          return [...prevState, selectedMeal];
        });
      }
    } else {
      //update cart
      setCart((prevState) => {
        return [...prevState, selectedMeal];
      });
    }
  };

  const orderHandler = () => {
    console.log('Thanks for you order, processing');
    setModalVisible(false);
    setCart([]);
    setTotalAmount(0);
  };

  const cartChangeHandler = (newCart) => {
    setTotalAmount(updateAmount(newCart));
    if (newCart.length >= 0) {
      setCart(newCart);
    } else {
      setCart([]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        totalAmount: totalAmount,
        addItem: addMealHandler,
        onOrder: orderHandler,
        modalVisible: modalVisible,
        showCart: showCartHandler,
        hideModal: resetModalHandler,
        cartChange: cartChangeHandler,
        meals: DUMMY_MEALS,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
