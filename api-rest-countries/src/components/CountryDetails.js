import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { url } from "./ApiAllCountries";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);

  const { countryName } = useParams();

  const getCountryByName = async () => {
    try {
      const res = await fetch(`${url}/name/${countryName}`);
      if (!res.ok) throw new Error("could not found");

      const data = await res.json();
      setCountry(data);
    } catch (error) {
      // console.log("Erreur");
    }
  };

  useEffect(() => {
    getCountryByName();
  }, []);

  return (
    <main>
      <div class="country-details-container">
        <Link to="/">
          <button href="#" class="back-button" onclick="history.back()">
            <i class="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
          </button>
        </Link>

        {country?.map((country, index) => {
          const {
            name,
            flags,
            capital,
            ccn3,
            population,
            subregion,
            tld,
            region,
            currencies,
            languages,
          } = country;

          console.log(country.name.nativeName.officiel);
          return (
            <div class="country-details" key={ccn3}>
              <img src={flags.png} alt="" />
              <div class="details-text-container">
                <div class="details-text">
                  <p>
                    <b>Native Name: {name.nativeName.official}</b>
                    <span class="native-name"></span>
                  </p>
                  <p>
                    <b>Population: {population} </b>
                    <span class="population"></span>
                  </p>
                  <p>
                    <b>Region: {region} </b>
                    <span class="region"></span>
                  </p>
                  <p>
                    <b>Sub Region: {subregion} </b>
                    <span class="sub-region"></span>
                  </p>
                  <p>
                    <b>Capital: {capital}</b>
                    <span class="capital"></span>
                  </p>
                  <p>
                    <b>Top Level Domain: {tld} </b>
                    <span class="top-level-domain"></span>
                  </p>
                  <p>
                    <b>Currencies: {currencies[index]} </b>
                    <span class="currencies"></span>
                  </p>
                  <p>
                    <b>Langages: {} </b>
                    <span class="langages"></span>
                  </p>
                </div>
                <div class="border-countries">
                  <b>Border Countries: </b>&nbsp;
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default CountryDetails;
