import { useContext } from "react";
import { ThemeContext } from "../contextes/ThemeProvider";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
