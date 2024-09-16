import React, { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('');
    const [isDarkMode, setIsDarkMode] =useOutletContext();
  return (
    <main className={`${isDarkMode?'dark':''}`}>
    <div className="search-filter-container">
    <SearchBar setQuery={setQuery}/>
    <SelectMenu setQuery={setQuery}/>
    </div>
    <CountriesList query={query}/>
    </main>
  )
}

export default Home