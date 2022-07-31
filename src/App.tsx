import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import Home from "./components/home/Home";
import Calendar from "./components/calendar/Calendar";
import Games from "./components/games/Games";
import Charts from "./components/charts/Charts";

const mockupEvents = [
  {
    id: 1,
    name: "Vacaciones",
    dateFrom: "2022-07-21T12:00",
    dateTo: "2022-07-22T08:45",
    description: "Example text",
    type: "Holiday",
  },
  {
    id: 2,
    name: "Reunión",
    dateFrom: "2022-07-24T09:45",
    dateTo: "2022-07-26T22:00",
    description: "Example text to be displayed on the calendar",
    type: "Standard",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="calendar" element={<Calendar events={mockupEvents} />} />
          <Route path="games" element={<Games />} />
          <Route path="charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
