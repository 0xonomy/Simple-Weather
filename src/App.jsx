import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
};

export default App;
