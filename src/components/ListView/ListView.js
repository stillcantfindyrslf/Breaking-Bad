import React from 'react';
import styles from './ListView.module.scss';
import StatusBadge from "../StatusBadge/StatusBadge";
import {useNavigate} from "react-router-dom";

const ListView = ({ persons }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/characters/${id}`);
    };

    return (
        <div className={styles.listView}>
            {persons.map((person) => (
                <div
                    key={person.id}
                    className={styles.listItem}
                    onClick={() => handleClick(person.id)}
                >
                    <div className={styles.info}>
                        <h3>{person.name}</h3>
                        <p><span>Status: </span><StatusBadge status={person.status}/></p>
                        <p><span>Date of birthday: </span>{person.birthday}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default ListView;
