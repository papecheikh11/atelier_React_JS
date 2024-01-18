import React from "react";

const Input = ({ type, onChange, placeholder, className }) => {
  return (
    <input
      id="input"
      name="input"
      type={type}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
