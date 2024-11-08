import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './CharacterDetailPage.module.scss';
import StatusBadge from "../../components/StatusBadge/StatusBadge";


const CharacterDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const character = useSelector((state) =>
        state.persons.persons.find((person) => person.id === id)
    );

    const handleClick = () => {
        navigate(`/characters`);
    };

    if(!character) {
        return <div className={styles.messageError}>Character is no found.</div>
    }

    return (
        <div className={styles.characterDetailPage}>
            <div className={styles.backBtn} onClick={handleClick}>
                <div className={styles.arrowLeft}></div>
                <p className={styles.backText}>Back to Catalog</p>
            </div>
            <div className={styles.aboutCharacter}>
                <img src={character.img} alt={character.name} className={styles.avatar} />
                <div className={styles.characterInfo}>
                    <div className="statusHolder">
                        <StatusBadge status={character.status} />
                    </div>
                    <h1>{character.name}</h1>
                    <p className={styles.textInfo}><span>Date of birthday:</span> {character.birthday}</p>
                    <p className={styles.textInfo}> <span>Nick name:</span> name of person</p>
                    <p className={styles.textInfo}> <span>Quote:</span> а вот и цитата</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetailPage;