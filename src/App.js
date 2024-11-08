import styles from './App.module.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import AppRoutes from "./routes/Routes";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className={styles.app}>
                  <AppRoutes />
              </div>
          </Router>
      </Provider>
  );
}

export default App;
