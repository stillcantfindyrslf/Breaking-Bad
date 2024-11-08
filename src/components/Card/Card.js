import React from 'react';
import styles from './Card.module.scss';
import {useNavigate} from "react-router-dom";

import Avatar from '../Avatar/Avatar';
import StatusBadge from "../StatusBadge/StatusBadge";
import Info from "../Info/Info";

const Card = ({ id, img, status, name, birthday }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/characters/${id}`);
    };

    return(
        <div className={styles.card} onClick={handleClick}>
            <Avatar img={img} />
            <div className={styles.details}>
                <div className="bagde">
                    <StatusBadge status={status} />
                </div>
                <Info
                    name={name}
                    birthday={birthday}
                />
            </div>
        </div>
    );
}


export default Card;