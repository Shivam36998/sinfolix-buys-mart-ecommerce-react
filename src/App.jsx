import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/desktop/Header";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
