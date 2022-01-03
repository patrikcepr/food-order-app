import React, { Fragment, useContext } from 'react';
import ReactDom from 'react-dom';
import Cart from '../../Cart/Cart';

import AppContext from '../../../store/cart-context';

import classes from './Modal.module.css';

const Modal = (props) => {
  const ctx = useContext(AppContext);

  return (
    <Fragment>
      {ReactDom.createPortal(
        <div className={classes.backdrop} onClick={ctx.hideModal}></div>,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <div className={classes.modal}>
          <Cart
          // onReset={props.onReset}
          // onOrder={props.onOrder}
          // cart={props.cart}
          // onCartChange={props.onCartChange}
          />
        </div>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
