import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import Cart from '../../Cart/Cart';

import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <div className={classes.backdrop} onClick={props.onReset}></div>,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <div className={classes.modal}>
          <Cart
            onReset={props.onReset}
            onOrder={props.onOrder}
            cart={props.cart}
            onCartChange={props.onCartChange}
          />
        </div>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
