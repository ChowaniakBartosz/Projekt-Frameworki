import React from 'react'
import styles from './Searchbar.module.scss';

import styled from 'styled-components'
import searchLogo from '../../assets/icons/search.svg';

const Searchbar = () => {
    return (
        <div className={styles.wrapper}>
            <input className={styles.searchInput} type="text" placeholder="Search Legalcluster" />
            <button className={styles.searchButton}>
                <img src={searchLogo} alt="search icon" />
            </button>
        </div>
    )
}

export default Searchbar
