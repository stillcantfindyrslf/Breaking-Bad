import React from 'react';
import styles from './StatusBadge.module.scss'


const StatusBadge = ({ status }) => {
    const isAlive = status === 'Alive';
    return (
        <div className={`${styles.badge} ${isAlive ? styles.alive : styles.deceased}`}>
            {isAlive ? "Alive" : "Deceased"}
        </div>
    );
};

export default StatusBadge;