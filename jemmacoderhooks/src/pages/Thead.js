import React from "react";

const Thead = () => {
  return (
    <thead>
      <tr className="border">
        <th scope="col">Prenom</th>
        <th scope="col">Nom</th>
        <th scope="col">Email</th>
        <th scope="col">Telephone</th>
        <th className="text-center" scope="col">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default Thead;
