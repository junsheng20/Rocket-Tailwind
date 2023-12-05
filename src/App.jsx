import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Rockets from "./pages/rockets";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  );
}
