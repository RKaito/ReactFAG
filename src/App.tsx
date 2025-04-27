import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { VersaoTailwind } from "./pages/VersaoTailwind";
import { VersaoStyled } from "./pages/VersaoStyled";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<VersaoTailwind />} />
        <Route path="/styled" element={<VersaoStyled />} />
      </Routes>
    </Router>
  );
}

export default App;
