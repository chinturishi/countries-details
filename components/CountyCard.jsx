const CountyCard = ({name,population,region,capital,flag}) => {
  return (
    <div className="country-card">
      <a  href="/country.html?name=South Georgia">
        <img src={flag} alt={name} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>{population}
          </p>
          <p>
            <b>Region: </b>{region}
          </p>
          <p>
            <b>Capital: </b>{capital}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CountyCard;
