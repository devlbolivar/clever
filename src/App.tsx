import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Matricula from "./components/matricula/Matricula";
import Classbook from "./components/classbook/Classbook";
import Records from "./components/records/Records";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import Home from "./components/dashboard/Home";

function App() {
  const [user, setUser] = useState<object | null>(null);

  const handleLogin = () => setUser({ id: "1", name: "robin" });
  const handleLogout = () => setUser(null);
  return (
    <div className="App">
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
      <Routes>
        <Route index element={<Layout />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="matricula" element={<Matricula />} />
        <Route path="classbook" element={<Classbook />} />
        <Route path="records" element={<Records />} />
      </Routes>
    </div>
  );
}

export default App;
