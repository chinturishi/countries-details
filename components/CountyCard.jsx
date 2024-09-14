import { Link } from "react-router-dom";

const CountyCard = ({name,population,region,capital,flag,data}) => {
  return (
    <div className="country-card">
      <Link to={`/${name}`} state={data}>
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
      </Link>
    </div>
  );
};

export default CountyCard;
