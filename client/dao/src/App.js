import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Business from "./pages/business/Business";
import Dashboard from "./pages/dashboard/Dashboard";
import Info from "./pages/info/Info";
import Vote from "./pages/vote/Vote";

function App() {
  // a flag for keeping track of whether or not a user is connected
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/info" element={<Info />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </div>
  );
}

export default App;
