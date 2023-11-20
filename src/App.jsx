import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParentComponent } from "./components/question1/ParentComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ParentComponent />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
