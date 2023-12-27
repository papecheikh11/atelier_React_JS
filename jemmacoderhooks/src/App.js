import React, { useState, useEffect } from "react";
import Form from "./pages/Form";
import Table from "./pages/Table";

function App() {
  const [inputs, setInputs] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, SetEditIndex] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    setTableData(storedData);
  }, []);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.prenom.trim() === "" ||
      inputs.nom.trim() === "" ||
      inputs.email.trim() === "" ||
      inputs.telephone.trim() === ""
    ) {
      alert("Remplissez tous les champs");
    } else {
      if (editClick) {
        const tempTableData = tableData;
        Object.assign(tempTableData[editIndex], inputs);
        setTableData([...tempTableData]);
        setEditClick(false);
        setInputs({ prenom: "", nom: "", email: "", telephone: "" });
        localStorage.setItem("userData", JSON.stringify(tempTableData));
      } else {
        setTableData([...tableData, inputs]);
        setInputs({ prenom: "", nom: "", email: "", telephone: "" });

        localStorage.setItem( "userData", JSON.stringify([...tableData, inputs]));
      }
    }
  };

  const handleEdit = (index) => {
    const tempData = tableData[index];
    setInputs({
      prenom: tempData.prenom,
      nom: tempData.nom,
      email: tempData.email,
      telephone: tempData.telephone,
    });
    setEditClick(true);
    SetEditIndex(index);
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
    localStorage.setItem("userData", JSON.stringify(filterData));
  };
  return (
    <div className="App">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        prenom={inputs.prenom}
        nom={inputs.nom}
        email={inputs.email}
        telephone={inputs.telephone}
        editClick={editClick}
        editIndex={editIndex}
      />
      <Table
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        tableData={tableData}
        editClick={editClick}
        editIndex={editIndex}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
