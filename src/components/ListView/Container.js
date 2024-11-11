import React from 'react';
import { useSelector } from 'react-redux';
import ListView from "./ListView";

const ListViewContainer = () => {
    const persons = useSelector((state) => state.persons.persons);
    return <ListView persons={persons} />;
};

export default ListViewContainer;