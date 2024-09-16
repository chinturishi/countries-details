import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = ({theme}) => {
  const [isDarkMode,setIsDarkMode]=useContext(ThemeContext);

  //const[isDarkMode, setIsDarkMode] = theme;

  // if(isDarkMode){
  //   document.body.classList.add('dark');
  // }
  // else{
  //   document.body.classList.remove('dark');
  // }
  return (
    <header className={`header-container ${isDarkMode?'dark':''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          setIsDarkMode(!isDarkMode);
          localStorage.setItem('isDarkMode',!isDarkMode)
        }}>
          <i className={`fa-solid fa-${isDarkMode?'sun':'moon'}`}></i>&nbsp;&nbsp;{isDarkMode?'Light':'Dark'} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
