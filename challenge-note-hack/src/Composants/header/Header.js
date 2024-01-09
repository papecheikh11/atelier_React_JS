import React from "react";
const Header = () => {
  return (
    <div className="container my-header my-5 mx-auto">
      <h3>NoteHack</h3>

      <div className="d-flex">
        <Bouttons className="color c-1" />
        <Bouttons className="color c-2" />
        <Bouttons className="color c-3" />
        <Bouttons className="color c-4" />
        <Bouttons className="color c-5" />
        <Bouttons className="color c-6" />
      </div>
    </div>
  );
};

const Bouttons = ({ className }) => {
  return (
    <div>
      <button className={className}></button>
    </div>
  );
};

export default Header;
