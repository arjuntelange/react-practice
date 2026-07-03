import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./routing/login-page/Login";
import Dashboard from "./routing/login-page/Dashboard";
import Profiles from "./routing/login-page/dashboard/Profiles";
import Courses from "./routing/login-page/dashboard/Courses";
import Settings from "./routing/login-page/dashboard/Settings";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profiles/>} />
            <Route path="/dashboard/profiles" element={<Profiles />} />
            <Route path="/dashboard/courses" element={<Courses />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
