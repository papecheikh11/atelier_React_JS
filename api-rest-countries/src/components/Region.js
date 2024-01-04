import React from "react";

const Region = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <select className="filter-by-region" onChange={selectHandler}>
      <option value="all" selected>
        {" "}
        Filter by Region
      </option>
      <option value="Africa">Afrique</option>
      <option value="Americas">Ameriques</option>
      <option value="Asia">Asie</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceanie</option>
    </select>
  );
};

export default Region;
