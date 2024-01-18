import React from "react";

const Option = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </>
  );
};

export default Option;
