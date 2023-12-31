import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/about-us'>ABOUT US</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
