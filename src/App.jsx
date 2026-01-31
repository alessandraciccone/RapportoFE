import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
