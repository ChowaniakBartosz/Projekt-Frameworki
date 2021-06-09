import React from 'react'
import styled from 'styled-components';
import styles from './Navbar.module.scss';

// Import of icons
import logo from '../../assets/logo.png';
import bellIcon from '../../assets/icons/bell.svg';
import homeIcon from '../../assets/icons/house.svg';
import commentsIcon from '../../assets/icons/comments.svg'

// Import of other missing components
// import Navigation from '../Navigation/Navigation';
import Searchbar from '../Searchbar/Searchbar';

function Navbar() : JSX.Element {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src={logo} alt="logo" className={styles.brandLogo} />
                {/* <Navigation /> */}

                <Searchbar />

                <div className={styles.menu}>
                    <div className={styles.menuItem}>
                        <img src={homeIcon} alt="Home icon" />
                    </div>
                    <div className={styles.menuItem}>
                        <img src={commentsIcon} alt="Comments icon" />
                        <p className={styles.badge}>2</p>
                    </div>
                    <div className={styles.menuItem}>
                        <img src={bellIcon} alt="Bell icon" />
                        <p className={styles.badge}>3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
