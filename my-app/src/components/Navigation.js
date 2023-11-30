import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* not using a in the li because it will cause a page reload */}
                {/* Link does not reload the page */}
                <li><Link to="/about-us">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;