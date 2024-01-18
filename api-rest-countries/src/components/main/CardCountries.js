import React from "react";
import { Link } from "react-router-dom";

const CardCountries = ({ country }) => {
  return (
    <div className="rounded-3 col-11 cardContainer col-md-5 col-lg-3 mx-auto">
      <div className="card elements rounded-3 border border-0 ">
        <Link
          to={`/country/${country.capital}`}
          className="text-decoration-none text-white"
        >
          <div className="flag-container">
            <img src={country.flags.png} className="country-flag" alt="flag" />
          </div>
          <div className="card-body">
            <h5 className="card-title mb-2 mt-2 overflow-hidden">
              {country.name.common}
            </h5>
            <ul className="list-group list-group-flush mb-3 m-0 border-0 bg-transparent">
              <li className="list-group-item m-1  border-0 p-0 bg-transparent elements">
                <span className="fw-bold">Population</span>:{""}{" "}
                {country.population}
              </li>
              <li className="list-group-item m-1  border-0 p-0 bg-transparent elements">
                <span className="fw-bold">Region</span>:{""} {country.region}
              </li>
              <li className="list-group-item m-1  border-0 p-0 bg-transparent elements">
                <span className="fw-bold">Capital</span>:{""} {country.capital}
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardCountries;
