import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};
