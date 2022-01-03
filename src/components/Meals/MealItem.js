import React from 'react';
import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price}`}</div>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
};

export default MealItem;
