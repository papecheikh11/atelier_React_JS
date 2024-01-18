import React from "react";

const Loader = () => {
  return (
    <div className=" d-flex flex-column align-items-center pt-5 mt-5">
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Chargement du contenu</p>
    </div>
  );
};

export default Loader;