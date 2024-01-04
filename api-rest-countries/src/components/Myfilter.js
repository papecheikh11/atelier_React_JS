import React, { useState } from "react";

const Myfilter = ({onSearch}) => {

const [input, setInput] = useState('')

const submitHandler = (e) => {
  e.preventDefault()

  onSearch(input)
}



  return (
    <div className="my_form">
      <form className="search-container" onSubmit={submitHandler}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search-country"
          type="search"
          id="search"
          name="search"
          placeholder="Search for a country..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Myfilter;
