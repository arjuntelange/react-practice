import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./routing/dashboard/Dashboard";
import Profile from "./routing/dashboard/Profile";
import Courses from "./routing/dashboard/Courses";
import Settings from "./routing/dashboard/Settings";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<Courses />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
