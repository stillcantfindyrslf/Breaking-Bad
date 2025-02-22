import React from 'react';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.fullscreenImageContainer}>
            <img
                src={`${process.env.PUBLIC_URL}/breakingBad.webp`}
                alt="Background"
                loading="lazy"
                className={styles.fullscreenImage}
            />
        </div>
    );
};

export default HomePage;
