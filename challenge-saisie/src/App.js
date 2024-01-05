import "./App.css";
import EspaceText from "./EspaceText";

function App() {
  return (
    <div className="App container-fluid">
      <h1 className="text-center text-light my-3">Markdown Editor </h1>
      <h6 className="text-center my_h6 my-4">You can type in html tags as well</h6>
      <div className="my-3">
        <EspaceText />
      </div>
    </div>
  );
}

export default App;
