import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./scss/main.scss"

function App() {
  return (
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="*" element={""} />
      </Routes>
  );
}

export default App;
