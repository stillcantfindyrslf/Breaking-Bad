import React from 'react';
import styles from './Avatar.module.scss';


const Avatar = ({ img, alt }) => {
    return <img className={styles.avatar} src={img} alt={alt}  />
};

export default Avatar;