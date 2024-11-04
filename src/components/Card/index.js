import React from 'react';
import styles from './styles.module.scss';

import Avatar from '../Avatar';
import StatusBadge from "../StatusBadge";
import Info from "../Info";

const Card = ({ img, name, birthday, status}) => (
    <div className={styles.card}>
        <Avatar img={img} />
        <div className={styles.content}>
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