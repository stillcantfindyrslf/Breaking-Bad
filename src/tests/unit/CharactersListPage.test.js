import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import CharactersListPage from '../../pages/CharactersListPage/CharactersListPage';
import {MemoryRouter} from "react-router-dom";
import store from "../../store";


describe('CharactersListPage', () => {
    test('renders component with initial elements', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CharactersListPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText(/These are characters of series/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Search by name/i)).toBeInTheDocument();
    });

    test('filters characters based on search query', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CharactersListPage />
                </MemoryRouter>
            </Provider>
        );

        const searchInput = screen.getByPlaceholderText(/Search by name/i);
        fireEvent.change(searchInput, { target: { value: 'Walter' } });

        expect(screen.getByText(/Walter White Jr./i)).toBeInTheDocument();
        expect(screen.queryByText(/Jesse Pinkman/i)).not.toBeInTheDocument();
    });

    test('shows message when no characters match search query', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CharactersListPage />
                </MemoryRouter>
            </Provider>
        );

        const searchInput = screen.getByPlaceholderText(/Search by name/i);
        fireEvent.change(searchInput, { target: { value: 'Nonexistent Character' } });

        expect(screen.getByText(/No matches found/i)).toBeInTheDocument();
    });

    test('toggles between card and list view', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CharactersListPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Cards of characters')).toBeInTheDocument();

        const toggleSwitch = screen.getByRole('checkbox');
        fireEvent.click(toggleSwitch);

        expect(screen.getByText('List of characters')).toBeInTheDocument();
    });
});