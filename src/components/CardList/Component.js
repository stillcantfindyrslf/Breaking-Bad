import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';


const CardList = ({ persons }) => (
    <div className={styles.cardListContainer}>
        <h2 className={styles.textHeading}>Cards of characters</h2>
        <div className={styles.cardList}>
            {persons.map((person) => (
                <Card
                    id={person.id}
                    img={person.img}
                    status={person.status}
                    name={person.name}
                    birthday={person.birthday}
                />
            ))}
        </div>
    </div>

);

export default CardList;