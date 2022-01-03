import React, { useContext } from 'react';
import CartItem from './CartItem';
import Button from '../UI/Button/Button';
import CartContext from '../../store/cart-context';

import classes from './Cart.module.css';

const totalPrice = (arr) => {
  let sum = 0;
  arr.forEach((obj) => (sum += +obj.amount * +obj.price));
  return sum;
};

const Cart = () => {
  const ctx = useContext(CartContext);

  const onRemoveHandler = (e) => {
    let newCart = ctx.cart
      .map((obj) => {
        if (obj.id === e.target.parentNode.parentNode.id && obj.amount >= 0) {
          return { ...obj, amount: --obj.amount };
        } else {
          return obj;
        }
      })
      .filter((obj) => obj.amount > 0);

    ctx.cartChange(newCart);
  };

  const onAddHandler = (e) => {
    let newCart = ctx.cart.map((obj) =>
      obj.id === e.target.parentNode.parentNode.id
        ? { ...obj, amount: ++obj.amount }
        : obj
    );
    ctx.cartChange(newCart);
  };

  const cartItems = ctx.cart.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        amount={item.amount}
        id={item.id}
        key={item.id}
        onRemove={onRemoveHandler}
        onAdd={onAddHandler}
      />
    );
  });

  return (
    <div>
      {ctx.cart.length > 0 ? (
        <div>
          <div className={classes['cart-items']}>{cartItems}</div>
          <div className={classes.total}>
            Total Amount <span>${totalPrice(ctx.cart).toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <h2>Your Cart Is Empty</h2>
      )}
      <div className={classes.actions}>
        <Button type='cancel' onClick={ctx.hideModal}>
          Cancel
        </Button>
        {ctx.cart.length > 0 ? (
          <Button type='button' style={classes.button} onClick={ctx.onOrder}>
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
