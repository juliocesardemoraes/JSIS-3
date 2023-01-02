import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Class from "./pages/Class";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/class/:id" element={<Class />} />
      </Routes>
    </Router>
  );
}
