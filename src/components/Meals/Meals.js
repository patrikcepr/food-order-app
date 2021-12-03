import React, { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import MealsList from './MealsList';

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsList meals={props.meals} addMeal={props.onAddMeal} />
    </Fragment>
  );
};

export default Meals;
