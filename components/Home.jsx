import React, { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

const Home = () => {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('');
  return (
    <>
    <main>
    <div className="search-filter-container">
    <SearchBar setQuery={setQuery}/>
    <SelectMenu setRegion={setRegion}/>
    </div>
    <CountriesList query={query} region={region}/>
    </main>
    </>
  )
}

export default Home