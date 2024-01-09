import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App container-fluid">
      <h1 className="text-center text-light my-3">Markdown Editor </h1>
      <h6 className="text-center my_h6 my-4">
        You can type in html tags as well
      </h6>
      <div className="my-3">
        <div className="d-flex container-fluid align-content-center">
          <EspaceText value={value} setValue={setValue} />
          <Affichage value={value} setValue={setValue}/>
        </div>
        <Button value={value}/>
      </div>
    </div>
  );
}

const EspaceText = ({value, setValue}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="col-lg-8">
      <textarea value={value} onChange={handleChange}></textarea>
    </div>
  );
};


const Affichage = ({value}) => {
  return <div className="col-lg-4 afficher">
    <pre>{value}</pre>
    </div>;
};


const Button = ({value}) => {

  const handleDownload = () => {
      const blob = new Blob([value], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "texte_telecharge.txt";
      a.click();
      URL.revokeObjectURL(url);
    }

return (
  <div className="text-center my-3">
    <button className="btn" onClick={handleDownload}>
      Download text
    </button>
  </div>
);
};


export default App;
