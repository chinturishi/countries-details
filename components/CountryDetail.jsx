import { useEffect, useState } from "react";
import './CountryDetail.css';
import { Link } from "react-router-dom";

const CountryDetail = () => {
  const countryName = new URLSearchParams(location.search).get("name");
  const [countryData,setCountryData]=useState(null);
  console.log(countryName);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
            name:data.name.common,
            nativeName:Object.values(data.name.nativeName)[0].common,
            region:data.region,
            subregion:data.subregion,
            population:data.population,
            capital:data.capital?.[0],
            topLevelDomain:data.tld.join(', '),
            currencies:Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', '),
            languages:Object.values(data.languages).join(', '),
            flagImage:data.flags.svg,
            flagAlt:data.flags.alt
        });
      });
  },[]);
  return (
   countryData===null? 'Loading........' :  <main>
   <div className="country-details-container">
     <Link className="back-button" to="/">
       <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
     </Link>
     <div className="country-details">
       <img src={countryData.flagImage} alt={countryData.flagAlt} />
       <div className="details-text-container">
         <h1>{countryData.name}</h1>
         <div className="details-text">
           <p>
             <b>Native Name: {countryData.nativeName} </b>
             <span className="native-name"></span>
           </p>
           <p>
             <b>Population: {countryData.population.toLocaleString(
             'en-IN'
           )}</b>
             <span className="population"></span>
           </p>
           <p>
             <b>Region: {countryData.region}</b>
             <span className="region"></span>
           </p>
           <p>
             <b>Sub Region: {countryData.subregion}</b>
             <span className="sub-region"></span>
           </p>
           <p>
             <b>Capital: {countryData.capital}</b>
             <span className="capital"></span>
           </p>
           <p>
             <b>Top Level Domain: {countryData.topLevelDomain}</b>
             <span className="top-level-domain"></span>
           </p>
           <p>
             <b>Currencies: {countryData.currencies}</b>
             <span className="currencies"></span>
           </p>
           <p>
             <b>Languages: {countryData.languages}</b>
             <span className="languages"></span>
           </p>
         </div>
         <div className="border-countries">
           <b>Border Countries: </b>&nbsp;
         </div>
       </div>
     </div>
   </div>
 </main>
  );
};

export default CountryDetail;
