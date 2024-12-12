// faltan tests y cumplir los criterios definidos para proyecto integrador
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resumen from "./pages/Resumen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resumen" element={<Resumen />}></Route>
      </Routes>
    </Router>
  )
}
export default App;