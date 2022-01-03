import React, { useState, useEffect } from 'react';
import CartIcon from './CartIcon';
// import AppContext from '../../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [updated, setUpdated] = useState('');

  useEffect(() => {
    setUpdated(classes.bump);
  }, [props]);

  setTimeout(() => {
    setUpdated('');
  }, 300);
  // const context = useContext(AppContext);

  return (
    <button className={`${classes.button} ${updated}`} onClick={props.onClick}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>{props.totalAmount}</div>
    </button>
  );
};

export default HeaderCartButton;
