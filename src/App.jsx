import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Works from "./Works";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
    </Routes>
  );
}
