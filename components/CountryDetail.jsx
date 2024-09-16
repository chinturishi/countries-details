import { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

const CountryDetail = () => {
  // = new URLSearchParams(location.search).get("name");
  const [countryData, setCountryData] = useState(null);
  const params = useParams();
  const countryName = params.country;
  //console.log(countryName);
  const [countyNotFound, setCountyNotFound] = useState(false);
  const { state } = useLocation();
  //const [isDarkMode, setIsDarkMode] =useOutletContext();
  const [isDarkMode]=useTheme();

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      region: data.region,
      subregion: data.subregion,
      population: data.population,
      capital: data.capital?.[0],
      topLevelDomain: data.tld.join(", "),
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages).join(", "),
      flagImage: data.flags.svg,
      flagAlt: data.flags.alt,
      borders: [],
    });
    if(!data.borders){
      data.borders=[];
    }
    Promise.all(data.borders.map((border) => {
      //console.log(border);
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCounty]) => borderCounty.name.common);
    })).then((borders) => {
      setTimeout(() => {  
        setCountryData((prev) => ({
          ...prev,
          borders,
        }));
      });
      //console.log(allBordersName);
    })
  }

  useEffect(() => {
   
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((error) => {
        console.log(error);
        setCountyNotFound(true);
      });
  }, [countryName]);
  if (countyNotFound) {
    return <h1>Country Not Found</h1>;
  }
  return countryData === null ? (
    "Loading........"
  ) : (
    <main className={`${isDarkMode?'dark':''}`}>
      <div className="country-details-container">
        <Link className="back-button" to="/" onClick={()=>(history.back())}>
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
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}
                </b>
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
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>
                  Border Countries:{" "}
                  {countryData.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </b>
                &nbsp;
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
