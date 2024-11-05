import React from 'react';
import { useSelector } from 'react-redux';
import CardListComponent from "./Component";

const CardListContainer = () => {
    const persons = useSelector((state) => state.persons.persons);
    return <CardListComponent persons={persons} />;
};

export default CardListContainer;
