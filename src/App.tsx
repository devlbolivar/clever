import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import Home from "./components/home/Home";
import Calendar from "./components/calendar/Calendar";
import Games from "./components/games/Games";
import Charts from "./components/charts/Charts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="games" element={<Games />} />
          <Route path="charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
