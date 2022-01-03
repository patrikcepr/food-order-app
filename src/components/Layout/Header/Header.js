import React, { useContext } from 'react';
import HeaderCartButton from './HeaderCartButton';

import CartContext from '../../../store/cart-context';

import mealsImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton
          onClick={ctx.showCart}
          totalAmount={ctx.totalAmount}
        />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Meals' />
      </div>
    </React.Fragment>
  );
};

export default Header;
