const CountyCard = ({name,population,region,capital,flag}) => {
  return (
    <div className="country-card">
      <a href={`/country.html?name=${name}`}>
        <img src={flag} alt={name} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>{population.toLocaleString(
                'en-IN'
              )}
          </p>
          <p>
            <b>Region: </b>{region}
          </p>
          <p>
            <b>Capital: </b>{capital?.[0]}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CountyCard;
