import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CharactersListPage from '../pages/CharactersListPage/CharactersListPage';
import CharacterDetailPage from '../pages/CharacterDetailPage/CharacterDetailPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersListPage />} />
            <Route path="/characters/:id" element={<CharacterDetailPage />} />
        </Routes>
    );
};

export default AppRoutes;