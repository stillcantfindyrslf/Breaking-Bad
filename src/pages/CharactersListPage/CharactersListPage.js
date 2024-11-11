import React, {useState} from 'react';
import CardListContainer from "../../components/CardList";
import ListViewContainer from "../../components/ListView";
import styles from "./CharactersListPage.module.scss";


const CharactersListPage = () => {
    const [isGridView, setIsGridView] = useState(true);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    return (
        <div className={styles.containerList}>
            <h1 className={styles.textHeading}>These are characters of serial</h1>
            <div className={styles.charactersPage}>
                <div className={styles.toggleContainer}>
                    <span>List</span>
                        <div className={styles.toggleSwitch}>
                            <label className={styles.switch}>
                                <input type="checkbox" checked={isGridView} onChange={toggleView} />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    <span>Cards</span>
                </div>
                {isGridView ? (
                    <CardListContainer />
                ) : (
                    <ListViewContainer />
                )}
            </div>
        </div>
    )
}

export default CharactersListPage;