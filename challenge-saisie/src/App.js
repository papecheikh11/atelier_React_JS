import "./App.css";
import Buuton from "./Buuton";
import EspaceText from "./EspaceText";
import ZoneAffichage from "./ZoneAffichage";

function App() {
  return (
    <div className="App container-fluid">
      <h1 className="text-center text-light">Markdown Editor </h1>
      <h6 className="text-center my_h6">You can type in html tags as well</h6>
      <div className="d-flex container-fluid align-content-center">
        <EspaceText />
        <ZoneAffichage  className='col-lg-6'/>
      </div>
      <Buuton/>
    </div>
  );
}

export default App;
