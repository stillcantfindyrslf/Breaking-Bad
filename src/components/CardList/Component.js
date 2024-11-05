import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';


const CardList = ({ persons }) => (
    <div className={styles.cardList}>
        {persons.map((person) => (
            <Card
                key={person.id}
                img={person.img}
                status={person.status}
                name={person.name}
                birthday={person.birthday}
            />
        ))}
    </div>
);

export default CardList;