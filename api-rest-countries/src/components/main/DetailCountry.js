import React from "react";
import Title from "../header/Title";
import { Link } from "react-router-dom";
import useCountry from "../../hooks/useCountry";

const DetailCountry = () => {
  const { country } = useCountry();
  console.log(country);
  return (
    <div className="row mx-1 mt-5 mb-0">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="col-12 col-lg-6 rounded-3">
          <img src={country.flags.png} alt="flag" className="img-fluid" />
        </div>
        <div className="d-flex justify-content-around flex-column col-12 col-lg-6 my-5">
          <InfosContry country={country} />
          <BorderCountry country={country} />
        </div>
      </div>
    </div>
  );
};

export default DetailCountry;

export const InfosContry = ({ country }) => {
  return (
    <div className="d-flex justify-content-between col-12 flex-column flex-lg-row align-items-0 align-items-lg-center col-lg-12">
      <div className="">
        <Title
          className="title fs-5 fw-bold mb-3"
          children={country.name.common}
        />
        <p className="m-1 population">
          <span className="style">Population</span> : {country.population}
        </p>
        <p className="m-1 region">
          <span className="style">Region</span> : {country.region}
        </p>
        <p className="m-1 sub-region">
          <span className="style">Sub Region</span> : {country.subregion}
        </p>
        <p className="m-1 capital">
          <span className="style">Capitale</span> : {country.capital}
        </p>
      </div>
      <div className="mt-2">
        <p className="m-1 top">
          <span className="style">Top Level Domain</span> : {country.tld[0]}
        </p>
        <p className="m-1 independent">
          <span className="style">independent</span> :{" "}
          {country.independent ? "true" : "False"}
        </p>
        <p className="m-1 independent">
          <span className="style">Currencies</span> :
        </p>
      </div>
    </div>
  );
};

export const BorderCountry = ({ country }) => {
  return (
    <div className="d-flex flex-column col-lg-11 mt-2 ">
      <div className="d-inline align-items-center borderers">
        <span className="p-2 text-start style">Border Countries :</span>
        {country.borders?.length === 0 ? (
          <span>Pas de pays frontaliers</span>
        ) : (
          <div>
            {country.borders?.map((border) => (
              <Link
                key={border}
                to={`/country/${country.capital}`}
                className="text-decoration-none text-white"
              >
                <button className="elements border-0 m-2 p-0 px-0 p-lg-2 px-lg-3">
                  {border}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
