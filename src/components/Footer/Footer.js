import React from 'react';
import styles from './Footer.module.scss'


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {currentYear} — Developed by stillcantfindyrslf
            </p>
        </footer>
    );
};

export default Footer;