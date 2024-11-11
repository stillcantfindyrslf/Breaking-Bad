import React from 'react';
import CardListComponent from "./Component";

const CardListContainer = ({persons}) => {
    return <CardListComponent persons={persons} />;
};

export default CardListContainer;
