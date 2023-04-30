import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
