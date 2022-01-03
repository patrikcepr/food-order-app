import React, { useState, useRef, useContext } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import AppContext from '../../store/cart-context';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();
  const ctx = useContext(AppContext);

  const submitFormHandler = (e) => {
    e.preventDefault();

    // let id = e.target.id;

    //add amount of meal
    const amount = amountRef.current.value;
    const amountNum = +amount;

    if (amount.trim().length === 0 || amountNum < 0 || amountNum > 10) {
      setAmountIsValid(false);
      return;
    }

    ctx.addItem(amount, props.id);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountRef}
        input={{
          type: 'number',
          label: 'Amount',
          id: 'amount_' + props.id,
          defaultValue: '1',
          min: '0',
          max: '10',
          step: '1',
        }}
      />
      <Button type='submit'>+Add</Button>
      {!amountIsValid && <p>Please enter the valid amount of 1-10</p>}
    </form>
  );
};

export default MealItemForm;
