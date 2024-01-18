import React from "react";
import Option from "./Option";

const Select = ({ handleSelectchange, options }) => {
  return (
    <select
    id="filter"
    name="filter"
      className="elements col-lg-2 border-0 p-2 p-lg-3"
      onChange={handleSelectchange}
    >
      <Option options={options} />
    </select>
  );
};

export default Select;
