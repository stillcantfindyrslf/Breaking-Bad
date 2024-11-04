import React from 'react';
import styles from './Info.module.scss';


const Info = ({ name, birthday }) => {
    return (
        <div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.birthday}>{birthday}</p>
        </div>
    );
};


export default Info;