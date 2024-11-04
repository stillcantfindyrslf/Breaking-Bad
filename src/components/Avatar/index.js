import React from 'react';
import styles from './styles.module.scss';


const Avatar = ({ img, alt }) => (
    <img src={img} alt={alt} className={styles.avatar} />
);

export default Avatar;