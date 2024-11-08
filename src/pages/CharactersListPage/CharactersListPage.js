import React from 'react';
import CardListContainer from "../../components/CardList";
import styles from "./CharactersListPage.module.scss";


const CharactersListPage = () => {
    return (
        <div className={styles.containerList}>
            <h1 className={styles.textHeading}>There are a list of characters</h1>
            <CardListContainer />
        </div>
    )
}

export default CharactersListPage;