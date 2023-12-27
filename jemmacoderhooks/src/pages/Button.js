import React from "react";

const Button = ({editClick}) => {
  return (
    <button type="submit" className={ editClick ? "btn btn-warning col-12 my-3" : "btn btn-success col-12 my-3"}>
      {editClick ? "Modifier" : "Ajouter"}
    </button>
  );
};

export default Button;
