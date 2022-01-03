import React, { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import MealsList from './MealsList';

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsList />
    </Fragment>
  );
};

export default Meals;
