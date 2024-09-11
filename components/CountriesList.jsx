import CountyCard from "./CountyCard";
import countiesdata from "../countiesdata";

const CountriesList = ({ query }) => {
  return (
    <div className="countries-container">
      {countiesdata
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
