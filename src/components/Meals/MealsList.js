import React from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card/Card';
import classes from './MealsList.module.css';

const MealsList = (props) => {
  const meals = props.meals.map((item) => {
    return (
      <MealItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        addMeal={props.addMeal}
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
