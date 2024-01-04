import { useState, useEffect } from "react";
import Myfilter from "./Myfilter";
import Region from "./Region";
import { Link } from "react-router-dom";
import { url } from "./ApiAllCountries";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    try {
      const response = await fetch(`${url}/all`);

      if (!response.ok) throw new Error("Quelque chose s'est mal passé");

      const countries = await response.json();
      
      setCountries(countries);
      console.log(countries);
    } catch (error) {
      console.log("Erreur");
    }
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  const getCountryByRegion = async (regionName) => {
    try {
      const response = await fetch(`${url}/region/${regionName}`);

      if (!response.ok) throw new Error("Failed");

      const data = await response.json();

      setCountries(data);
    } catch (error) {
      console.log("Erreur");
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${url}/name/${countryName}`);

      if (!res.ok) throw new Error("Aucun pays trouvé");

      const data = await res.json();

      setCountries(data);
    } catch (error) {
      console.log("Erreur");
    }
  };
  return (
    <div className="header">
      <div className="country__top search-filter-container">
        <div className="search">
          <Myfilter onSearch={getCountryByName} />
        </div>
        <div>
          <Region onSelect={getCountryByRegion} />
        </div>
      </div>
      <div className="country__bottom countries-container">
        {countries.map((country) => {
          const { ccn3, region, name, flags, capital, population } = country;
          return (
            <Link
              to={`/country/${country.name.common}`}
              className="text-decoration-none outline-none"
            >
              <article key={ccn3}>
                <div className="country-card">
                  <img src={flags.png} alt="flag" />
                  <div className="card-text">
                    <h3 className="card-title">{name.common}</h3>
                    <p>
                      <b>Population: </b>
                      {population.toLocaleString("en-US")}
                    </p>
                    <p>
                      <b>Region: </b>
                      {region}
                    </p>
                    <p>
                      <b>Capital: </b>
                      {capital?.[0]}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
