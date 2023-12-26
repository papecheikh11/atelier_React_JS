import React from 'react'
import Tbody from "./Tbody";

const Table = ({tableData,handleDelete, handleEdit}) => {
  return (
    <div className="container">
        <h6 className="text-center mt-4">Utilisateurs</h6>
        <table className="table table-striped">
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
          <Tbody handleDelete={handleDelete} handleEdit={handleEdit} tableData={tableData}/>
        </table>
      </div>
  )
}

export default Table
