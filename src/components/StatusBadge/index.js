import React from 'react';
import styles from './styles.module.scss'


const StatusBadge = ({ status }) => {
    const isAlive = status === 'живой';
    return (
        <div className={`${styles.badge} ${isAlive ? styles.alive : styles.deceased}`}>
            {status}
        </div>
    );
};

export default StatusBadge;