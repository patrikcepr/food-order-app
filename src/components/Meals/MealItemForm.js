import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
// import CartContext from '../../store/cart-context';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amount, setAmount] = useState('1');

  // const context = useContext(CartContext);

  const changeValueHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    //add amount of meal
    let id = e.target.id;
    props.addMeal(amount, id);
    setAmount('1');
  };

  return (
    <form className={classes.form} id={props.id} onSubmit={submitFormHandler}>
      <Input
        label='Amount'
        type='number'
        id={`amount_${props.id}`}
        value={amount}
        onChange={changeValueHandler}
        min='0'
        step='1'
      />
      <Button type='submit'>+Add</Button>
    </form>
  );
};

export default MealItemForm;
