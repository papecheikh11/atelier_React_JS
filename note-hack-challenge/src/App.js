
import "./App.css";
import { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [tache, setTache] = useState(
    JSON.parse(localStorage.getItem("tache")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(
    JSON.parse(localStorage.getItem("backgroundColor")) || ""
  );
  let iteration = tache.length;
  const handleColorButtonClick = (newColor) => {
    setBackgroundColor(newColor);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("veuillez entrez une tache");
    } else {
      let newTache;
      if (!isEditing) {
        newTache = {
          id: Math.floor(Math.random() * 100002120),
          value: inputValue,
          timestamp: new Date().toLocaleString(),
        };
        newTache = [...tache, newTache];
      } else {
        newTache = tache.map((maTache) =>
          maTache.id === editIndex
            ? {
                value: inputValue,
                timestamp: new Date().toLocaleString(),
              }
            : maTache
        );
        setIsEditing(false);
      }
      setInputValue("");
      setTache(newTache);
    }
  };

  const editTask = (taskId) => {
    const tacheEdit = tache.find((tacheI) => tacheI.id === taskId);
    if (tacheEdit) {
      setInputValue(tacheEdit.value);
      setIsEditing(true);
      setEditIndex(tacheEdit.id);
    } else {
      console.error("Task not found");
    }
  };

  const deleteAll = () => {
    setTache([]);
  };

  const deleteTask = (task) => {
    const newTask = tache.filter((tacheI) => tacheI.id !== task);
    setTache(newTask);
  };

  useEffect(() => {
    localStorage.setItem("tache", JSON.stringify(tache));
    localStorage.setItem("backgroundColor", JSON.stringify(backgroundColor));
  }, [tache, backgroundColor]);

  const contextValue = {
    inputValue,
    setInputValue,
    tache,
    setTache,
    isEditing,
    setIsEditing,
    editIndex,
    setEditIndex,
    backgroundColor,
    setBackgroundColor,
    iteration,
    handleColorButtonClick,
    handleChange,
    handleSubmit,
    editTask,
    deleteAll,
    deleteTask,
  };
  return (
    <AppContext.Provider value={contextValue}> {children} </AppContext.Provider>
  );
};
const useAppContext = () => useContext(AppContext);
function App() {
  const {inputValue, setInputValue, tache, setTache, backgroundColor, iteration,handleColorButtonClick, handleChange, deleteTask} = useAppContext();

  return (
    <div
      className="App container-fluid"
      style={{ backgroundImage: backgroundColor }}
    >
      <div>
        <Header onColorButtonClick={handleColorButtonClick} />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          tache={tache}cd note
          setTache={setTache}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <div>
        <MonAffichage
          iteration={iteration}
          tache={tache}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

const MonAffichage = () => {
  const { iteration, tache, deleteTask, editTask, deleteAll } = useAppContext();
  return (
    <div className="container bg-white">
      <div className=" mon-affichage mx-auto my-5 row">
        <div className="col-12 col-md-6 d-flex">
          <h5> Notes </h5>
          <div className="ms-2 iter text-center text-dark">{iteration}</div>
        </div>
        <div className="col-12 col-md-6 text-end">
          <Clear deleteAll={deleteAll} />
        </div>
      </div>
      <hr />
      <div>
        <Liste tache={tache} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
};

const Clear = ({ deleteAll }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={deleteAll}>
        Clear All
      </button>
    </div>
  );
};

const Liste = ({ tache, deleteTask, editTask }) => {
  return (
    <div className="container d-flex contenant">
      <Card
        tache={tache}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

const Card = ({ tache, deleteTask, editTask, isEditing }) => {
  // console.log(isEditing);
  return tache.map((myTask) => (
    <div key={myTask.id} className="contenue">
      <div>
        <h6>{myTask.value}</h6>
        <p>{myTask.timestamp}</p>
      </div>
      <div>
        <SuppMod
          className="border-btn"
          icon={<i className="fa-solid fa-trash mx-1 "></i>}
          onClick={() => deleteTask(myTask.id)}
        />
        <SuppMod
          isEditing={isEditing}
          tache={tache}
          className="border-btn"
          icon={<i className="fa-solid fa-pen mx-1 "></i>}
          onClick={() => editTask(myTask.id)}
        />
      </div>
    </div>
  ));
};

const SuppMod = ({ onClick, className, icon }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {icon}
      </button>
    </div>
  );
};

const Header = ({ onColorButtonClick }) => {
  return (
    <div className="container my-header my-5 mx-auto">
      <h3>NoteHack</h3>

      <div className="d-flex">
        <Bouttons
          className="color c-1"
          onClick={() =>
            onColorButtonClick(
              "linear-gradient(to right, rgb(136, 136, 235), rgb(46, 43, 224))"
            )
          }
        />
        <Bouttons
          className="color c-2"
          onClick={() =>
            onColorButtonClick(
              "linear-gradient(to right, rgb(183, 183, 238), rgb(238,156,197))"
            )
          }
        />
        <Bouttons
          className="color c-3"
          onClick={() =>
            onColorButtonClick(
              "linear-gradient(to right,rgb(233,23,23), rgb(136, 136, 235), rgb(46, 43, 224))"
            )
          }
        />
        <Bouttons
          className="color c-4"
          onClick={() =>
            onColorButtonClick(
              "linear-gradient(to right, rgb(248, 108, 127), rgb(233, 23, 23))"
            )
          }
        />
        <Bouttons
          className="color c-5"
          onClick={() =>
            onColorButtonClick(
              "linear-gradient(to right, rgb(230, 140, 23), rgb(238, 183, 82))"
            )
          }
        />
        <Bouttons
          className="color c-6"
          onClick={() =>
            onColorButtonClick(
              "linear-gradient(to right, rgb(168, 243, 158), rgb(214, 241,58))"
            )
          }
        />
      </div>
    </div>
  );
};

const Bouttons = ({ className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}></button>
    </div>
  );
};

const Input = () => {
  const { handleChange, inputValue, handleSubmit } = useAppContext();

  return (
    <form className="container mon-input mx-auto my-5" onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="Add note"
        onChange={handleChange}
        value={inputValue}
      />
      <Btn />
    </form>
  );
};

const Btn = () => {
  const { isEditing } = useAppContext();

  return (
    <div>
      <button className="btn btn-success mx-1">
        {!isEditing ? "Add" : "Update"}
      </button>
    </div>
  );
};

const MainApp = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default <MainApp />;