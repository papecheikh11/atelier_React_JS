import React from "react";
import InputForm from "./InputForm";
import Select from "./Select";
import useCountry from "../../hooks/useCountry";

const Form = () => {
  const options = [
    "Filter by Region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const {handleSelect} = useCountry()
  return (
    <form
      id="form"
      className="d-flex flex-column col-12 flex-md-row align-items-start algn-items-lg-center mt-4 mb-0 mt-lg-0 justify-content-between"
      
    >
      <InputForm />
      <Select options={options} handleSelectchange={(e) => handleSelect(e)} />
    </form>
  );
};

export default Form;
