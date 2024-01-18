import { useContext } from "react";
import { CountryContext } from "../contextes/CountryProvider";

const useCountry = () => {
  return useContext(CountryContext);
};

export default useCountry;
