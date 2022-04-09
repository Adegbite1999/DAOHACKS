import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Business from "./pages/business/Business";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  // a flag for keeping track of whether or not a user is connected
  const [connected, setConnected] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
