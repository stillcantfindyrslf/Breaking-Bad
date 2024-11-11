import React, {useState} from 'react';
import CardListContainer from "../../components/CardList";
import ListViewContainer from "../../components/ListView";
import styles from "./CharactersListPage.module.scss";
import {useSelector} from "react-redux";


const CharactersListPage = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const persons = useSelector((state) => state.persons.persons);

    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    return (
        <div className={styles.containerList}>
            <h1 className={styles.textHeading}>These are characters of series</h1>
            <div className={styles.charactersPage}>
                <div className={styles.filterContainer}>
                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
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
                </div>

                {filteredPersons.length === 0 ? (
                    <p className={styles.noMatchesMessage}>No matches found</p>
                ) : (
                    isGridView ? (
                    <CardListContainer persons={filteredPersons} />
                ) : (
                    <ListViewContainer persons={filteredPersons} />
                    )
                )}
            </div>
        </div>
    )
}

export default CharactersListPage;