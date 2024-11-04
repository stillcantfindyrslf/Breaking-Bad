import React from 'react';
import styles from './Card.module.scss';

import Avatar from '../Avatar/Avatar';
import StatusBadge from "../StatusBadge/StatusBadge";
import Info from "../Info/Info";

const Card = ({ img, status, name, birthday }) => (
    <div className={styles.card}>
        <Avatar img={img} />
        <div className={styles.details}>
            <div className="bagde">
                <StatusBadge status={status} />
            </div>
            <Info
                name={name}
                birthday={birthday}
            />
        </div>
    </div>
);

export default Card;