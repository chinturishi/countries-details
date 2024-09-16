
import './App.css'
import { Outlet } from "react-router-dom"
import Header from './components/Header'
import { useState } from 'react';



const App = () => {
  //const [query, setQuery] = useState('');
  const[isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    <>
    <Header theme={[isDarkMode, setIsDarkMode]}/>
    <Outlet context={[isDarkMode, setIsDarkMode]}/>
   </>
  )
}

export default App