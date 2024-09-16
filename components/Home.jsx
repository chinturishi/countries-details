import React, { useContext, useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
//import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'

const Home = () => {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('');
    //const [isDarkMode, setIsDarkMode] =useOutletContext();
    const [isDarkMode]=useTheme();
    console.log(isDarkMode);
  return (
    <main className={`${isDarkMode?'dark':''}`}>
    <div className="search-filter-container">
    <SearchBar setQuery={setQuery}/>
    <SelectMenu setRegion={setRegion}/>
    </div>
    <CountriesList query={query} region={region}/>
    </main>
  )
}

export default Home