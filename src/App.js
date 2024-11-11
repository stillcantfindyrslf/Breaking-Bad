import styles from './App.module.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import AppRoutes from "./routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className={styles.app}>
                    <Header />
                        <div className={styles.content}>
                            <AppRoutes />
                        </div>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
