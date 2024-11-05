import styles from './App.module.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CardListContainer from "./components/CardList";

function App() {
  return (
      <Provider store={store}>
        <div className={styles.appContainer}>
            <CardListContainer />
        </div>
      </Provider>
  );
}

export default App;
