import React from 'react'
import Tbody from "./Tbody";
import Thead from './Thead';

const Table = ({tableData,handleDelete, handleEdit, editClick}, editIndex) => {
  return (
    <div className="container">
        <h6 className="text-center mt-4">Utilisateurs</h6>
        <table className="table table-striped">
          <Thead/>
          <Tbody handleDelete={handleDelete} handleEdit={handleEdit} tableData={tableData}  editClick={editClick} editIndex={editIndex}/>
        </table>
      </div>
  )
}

export default Table
