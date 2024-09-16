
import './App.css'
import { Outlet } from "react-router-dom"
import Header from './components/Header'
import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';



const App = () => {
  //const [query, setQuery] = useState('');
  const[isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
  //   <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
  //   {/* <Header theme={[isDarkMode, setIsDarkMode]}/> */}
  //   <Header/>
  //   <Outlet />
  //   {/* <Outlet context={[isDarkMode, setIsDarkMode]}/> */}
  //  </ThemeContext.Provider>
  <ThemeProvider>
    <Header/>
    <Outlet />
    </ThemeProvider>
  )
}

export default App