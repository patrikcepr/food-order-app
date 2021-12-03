import React from 'react';
import CartItem from './CartItem';
import Button from '../UI/Button/Button';
// import CartContext from '../../store/cart-context';

import classes from './Cart.module.css';

const totalPrice = (arr) => {
  let sum = 0;
  arr.forEach((obj) => (sum += +obj.amount * +obj.price));
  return sum;
};

const Cart = (props) => {
  // const context = useContext(CartContext);

  const onRemoveHandler = (e) => {
    let newCart = props.cart
      .map((obj) => {
        if (obj.id === e.target.parentNode.parentNode.id && obj.amount >= 0) {
          return { ...obj, amount: --obj.amount };
        } else {
          return obj;
        }
      })
      .filter((obj) => obj.amount > 0);

    props.onCartChange(newCart);
  };

  const onAddHandler = (e) => {
    let newCart = props.cart.map((obj) =>
      obj.id === e.target.parentNode.parentNode.id
        ? { ...obj, amount: ++obj.amount }
        : obj
    );
    props.onCartChange(newCart);
  };

  const cartItems = props.cart.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        amount={item.amount}
        id={item.id}
        key={item.id}
        onCartChange={props.onCartChange}
        onRemove={onRemoveHandler}
        onAdd={onAddHandler}
      />
    );
  });

  return (
    <div>
      {props.cart.length > 0 ? (
        <div>
          <div className={classes['cart-items']}>{cartItems}</div>
          <div className={classes.total}>
            Total Amount <span>${totalPrice(props.cart).toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <h2>Your Cart Is Empty</h2>
      )}
      <div className={classes.actions}>
        <Button type='cancel' onClick={props.onReset}>
          Cancel
        </Button>
        {props.cart.length > 0 ? (
          <Button type='button' style={classes.button} onClick={props.onOrder}>
            Order
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Cart;
