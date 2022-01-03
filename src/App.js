import React, { useContext } from 'react';
import Header from './components/Layout/Header/Header';
import Modal from './components/UI/Modal/Modal';
import Meals from './components/Meals/Meals';
import AppContext from './store/cart-context';

function App() {
  const ctx = useContext(AppContext);

  return (
    <React.Fragment>
      <Header />
      {ctx.modalVisible && <Modal />}
      <Meals />
    </React.Fragment>
  );
}

export default App;
