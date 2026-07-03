import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./routing/protected-routes/Dashboard";
import Login from "./routing/protected-routes/Login";
import ProtectedRoute from "./routing/protected-routes/ProtectedRoute";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
