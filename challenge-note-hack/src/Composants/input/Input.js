import React from "react";

const Input = ({handleChange, inputValue, setInputValue, addTask, setTache, editTask,tache}) => {
  

  

  return (
    <div className="container mon-input mx-auto my-5">
      <input
        className="form-control"
        placeholder="Add note"
        onChange={handleChange}
        value={inputValue}
      />
      <Btn
        addTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editTask={editTask}
        tache={tache}
      />
    </div>
  );
};

const Btn = ({ addTask, editTask, isEditing }) => {

  

  return (
    <div>
      <button className="btn btn-success mx-1" onClick={addTask}>
       Add
      </button>
    </div>
  );
};

export default Input;
