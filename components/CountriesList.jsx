import CountyCard from "./CountyCard";
import countiesdata from "../countiesdata";

const CountriesList = () => {
  //console.log(countiesdata);
  const list = countiesdata.map((country) => {
    return (
      <CountyCard
        name={country.name.common}
        population={country.population}
        region={country.region}
        capital={country.capital}
        flag={country.flags.svg}
      />
    );
  });
  console.log(list);
  return <div className="countries-container">{list}</div>;
};

export default CountriesList;
