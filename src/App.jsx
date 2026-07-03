import { Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./routing/dynamic-users/Users";
import UserProfile from "./routing/dynamic-users/UserProfile";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="/users/:id" element={<UserProfile/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
