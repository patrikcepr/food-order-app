import React, { useState } from 'react';
import Header from './components/Layout/Header/Header';
import Modal from './components/UI/Modal/Modal';
import Meals from './components/Meals/Meals';
import DUMMY_MEALS from './components/Meals/dummy_meals';
// import CartContext from './store/cart-context';

const updateAmount = (arr) => {
  let total = 0;
  arr.forEach((obj) => (total += +obj.amount));
  return total;
};

function App() {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const showCartHandler = () => {
    setModalVisible(true);
  };

  const resetModalHandler = () => {
    setModalVisible(false);
  };

  const orderHandler = () => {
    console.log('Thanks for you order, processing');
    setModalVisible(false);
    setCart([]);
    setTotalAmount(0);
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

  const cartChangeHandler = (newCart) => {
    setTotalAmount(updateAmount(newCart));
    if (newCart.length >= 0) {
      setCart(newCart);
    } else {
      setCart([]);
    }
  };

  return (
    // <CartContext.Provider
    //   value={{
    //     cart: {
    //       id: '',
    //       name: '',
    //       price: 15,
    //       amount: 0,
    //       total: 0,
    //     },

    //     onSubmit: addMeal
    //   }}
    // >
    <React.Fragment>
      <Header onShowCart={showCartHandler} totalAmount={totalAmount} />
      {modalVisible && (
        <Modal
          onReset={resetModalHandler}
          onOrder={orderHandler}
          cart={cart}
          onCartChange={cartChangeHandler}
          totalAmount={totalAmount}
        />
      )}
      <Meals meals={DUMMY_MEALS} onAddMeal={addMealHandler} />
    </React.Fragment>
    // </CartContext.Provider>
  );
}

export default App;
