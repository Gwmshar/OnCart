import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Mycart from "./pages/Mycart";
import NoPage from "./pages/NoPage";

function App() {
  const [onCart, setOnCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            element={<Home setOnCart={setOnCart} onCart={onCart} />}
          />
          <Route
            path="/mycart"
            element={<Mycart onCart={onCart} setOnCart={setOnCart} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
