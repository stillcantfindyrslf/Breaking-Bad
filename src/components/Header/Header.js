import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.headerMenu}>
                <a href="/" className={styles.logo}>Breaking Bad</a>
                <nav className={styles.menuBody}>
                    <ul className={styles.menuList}>
                        <li><a href="/" className={styles.menuLink}>Home page</a></li>
                        <li><a className={styles.menuLink}>
                            {location.pathname !== '/characters' && (
                                <NavLink
                                    to="/characters"
                                    className={({ isActive }) =>
                                        isActive ? styles.activeLink : styles.menuLink}
                                >
                                    Characters
                                </NavLink>
                            )}
                        </a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default Header;
