import styles from './App.module.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import AppRoutes from "./routes/Routes";
import Header from "./components/Header/Header";

function App() {
  return (
      <Provider store={store}>
              <Router>
                  <Header />
                  <div className={styles.app}>
                      <AppRoutes />
                  </div>
              </Router>
      </Provider>
  );
}

export default App;
