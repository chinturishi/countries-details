import { useEffect, useState } from "react";
import CountyCard from "./CountyCard";
//import countiesdata from "../countiesdata";

const CountriesList = ({ query }) => {
  const [countiesData, setcountiesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setcountiesData(data);
      });
  },[]);

  // if(countiesData.length===0){
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setcountiesData(data);
  //   })
  // }
  //Problem-1 allways calling
  // fetch('https://restcountries.com/v3.1/all')
  // .then((res)=>res.json())
  // .then((data)=>{
  //   console.log(countiesData);
  // })
  return (
    <div className="countries-container">
      {countiesData
        .filter((country) =>
          country.name.common.toLocaleLowerCase().includes(query)
        )
        .map((country) => {
          console.log(country);
          return (
            <CountyCard
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
            />
          );
        })}
    </div>
  );
};

export default CountriesList;
