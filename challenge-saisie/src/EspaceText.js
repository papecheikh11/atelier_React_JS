import { useState } from "react";
import React from "react";

const EspaceText = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue (e.target.value)
  };

  const handleDownload = () => {
    const blob = new Blob([value], { type: "text/word" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a");
    a.href = url;
    a.download = "texte_telecharge.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
    <div className="d-flex container-fluid align-content-center">
      <div className="col-lg-8">
        <textarea onChange={handleChange}></textarea>
      </div>
      <div className="col-lg-4 afficher">
      {value} 
      </div>
    </div>
    <div className='text-center my-3'>
      <button className='btn' onClick={handleDownload}>Download text</button>
    </div>
      </>
  );
};

export default EspaceText;
