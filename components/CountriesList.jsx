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
        console.log(data)
      });
  },[]);
  return (
    countiesData.length === 0 ? "Loading........" :
    
    // <div className="countries-container">
    //   {
    //     region === "" ? countiesData
    //     .filter((country) =>
    //       country.name.common.toLocaleLowerCase().includes(query) || country.region.toLocaleLowerCase().includes(query)
    //     )
    //     .map((country) => {
    //       //console.log(country);
    //       return (
    //         <CountyCard
    //           key={country.name.common}
    //           name={country.name.common}
    //           population={country.population}
    //           region={country.region}
    //           capital={country.capital}
    //           flag={country.flags.svg}
    //           data={country}
    //         />
    //       );
    //     }) : countiesData.filter((country) =>
    //       country.region === region
    //     ).map((country) => {
    //       //console.log(country);
    //       return (
    //         <CountyCard
    //           key={country.name.common}
    //           name={country.name.common}
    //           population={country.population}
    //           region={country.region}
    //           capital={country.capital}
    //           flag={country.flags.svg}
    //         />
    //       );
    //     })
    //   }
    // </div>

    <div className="countries-container">
      {
        countiesData
        .filter((country) =>
          country.name.common.toLocaleLowerCase().includes(query) || country.region.toLocaleLowerCase().includes(query)
        )
        .map((country) => {
          //console.log(country);
          return (
            <CountyCard
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
              data={country}
            />
          );
        })
      }
    </div>
  );
};

export default CountriesList;
