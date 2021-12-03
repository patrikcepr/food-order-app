import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        name={props.name}
        min={props.min}
        step={props.step}
      />
    </div>
  );
};

export default Input;
