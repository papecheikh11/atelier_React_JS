import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <>
      <header className="header-container">
        <div className="header-content">
            <h2 className="title">Where in the world</h2>
            <p className="theme-changer"><i className="fa-regular fa-moon"></i>&nbsp; &nbsp; Dark Mode</p>
        </div>
    </header>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route
          path="/country/:countryName"
          element={<CountryDetails />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
