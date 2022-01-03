import React, { useContext } from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card/Card';
import classes from './MealsList.module.css';

import AppContext from '../../store/cart-context';

const MealsList = (props) => {
  const ctx = useContext(AppContext);

  const meals = ctx.meals.map((item) => {
    return (
      <MealItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });
  return (
    <Card style={classes.meals}>
      <ul>{meals}</ul>
    </Card>
  );
};

export default MealsList;
