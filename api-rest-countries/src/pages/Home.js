import React from "react";
import Country from "./Country";
import CountryProvider from "../contextes/CountryProvider";

const Home = () => {
  return (
    <CountryProvider>
      <Country/>
    </CountryProvider>
  );
};

export default Home;
