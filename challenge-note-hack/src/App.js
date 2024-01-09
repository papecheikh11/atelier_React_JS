import "./App.css";
import { useState } from "react";

import MonAffichage from "./Composants/affichage/MonAffichage";
import Header from "./Composants/header/Header";
import Input from "./Composants/input/Input";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [tache, setTache] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();

    if (inputValue.trim() ==='') {
      alert('veuillez entrez une tache')
    }
    else{
      const id = Math.floor(Math.random() * 100002120);
      let newTache = inputValue;
  
      let updateTache = [...tache];
      updateTache.push({
        tache: newTache,
        id: id,
        timestamp: new Date().toLocaleString(),
      });
  
      setTache(updateTache);
  
      setInputValue("");
  
    }

  
  };

  const deleteTask = (Task) => {
    const newTask = tache.filter((tacheI) => tacheI.id !== Task);
    setTache(newTask);
  };

  const editTask = (Task) => {
    const tacheEdit = tache.find((tacheI) => tacheI.id !== Task);
    setInputValue(tacheEdit.tache);
    setIsEditing(true)
  };

 
  return (
    <div className="App container-fluid">
      <div>
        <Header />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          tache={tache}
          setTache={setTache}
          addTask={addTask}
          editTask={editTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <div>
        <MonAffichage
          tache={tache}
          addTask={addTask}
          deleteTask={deleteTask}
          editTask={editTask}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}

export default App;
