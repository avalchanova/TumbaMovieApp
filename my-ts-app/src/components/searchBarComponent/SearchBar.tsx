// SearchBar.tsx
import React from 'react'
import styles from './SearchBar.module.css'
import searchSVG from '../../assets/Magnifying_glass_icon.svg'

interface SearchBarProps {
    searchQuery: string
    setSearchQuery: React.Dispatch<string>
    handleSearch: () => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
    searchQuery,
    setSearchQuery,
    handleSearch,
}) => {
    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.searchInputAndButton}>
                <input
                    className={styles.searchInput}
                    type='search'
                    id='movie-search'
                    name='movie-search'
                    // placeholder='Search for a movie'
                    value={searchQuery}
                    onChange={(e) => {
                        e.preventDefault()
                        setSearchQuery(e.target.value)
                    }}
                    onKeyUp={(e) => e.code === 'Enter' && handleSearch()}
                />
                {/* <button className={styles.searchButton} onClick={handleSearch}> */}
                <img
                    className={styles.searchButton}
                    src={searchSVG}
                    alt='search button'
                    width={15}
                    height={15}
                    onClick={handleSearch}
                />
                {/* </button> */}
            </div>
        </div>
    )
}
