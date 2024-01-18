import React, { createContext, useState } from "react";

export const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Filter by Region");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  const getCountries = async (url) => {
    try {
      const res = await fetch(url);
      const country = await res.json();
      setCountries(country);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (err) {
      console.error("Erreur lors de la recuperation des pays");
    }
  };

  const getcountry = async (id) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/capital/${id}`
      );
  
      const data = await response.json();
      const countryData = data[0];
      setCountry(countryData);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error(error, "la récupération des details du pays a echouer ");
    }
  };

  const filteredCountries = countries.filter(
    (country) =>
      (filter === "Filter by Region" || country.region === filter) &&
      (country.name.common.toLowerCase().includes(search.toLowerCase()) ||
        country.region.toLowerCase().includes(search.toLowerCase()))
  );

  const value = {
    countries,
    country,
    loading,
    search,
    filter,
    handleSearch,
    handleSelect,
    getCountries,
    getcountry,
    filteredCountries,
  };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryProvider;
