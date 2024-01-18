import React from "react";
import Title from "./Title";
import Button from "./Button";
import { FaRegMoon, FaMoon } from "react-icons/fa6";
import  useTheme  from "../../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="pt-3 p-2 px-0 fixed-top elements">
      <div className="container d-flex align-items-center justify-content-between">
        <Title className="fw-bold" children="Where in the world?" />
        <Button
          className="border-0 elements m-0 p-0 pb-2 btnTheme fw-bold bg-transparent"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FaMoon/> : <FaRegMoon /> } Dark Mode
        </Button>
      </div>
    </header>
  );
};

export default Header;
