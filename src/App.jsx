import { useState } from "react";
import Signup from "./components/Signup/signup";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
