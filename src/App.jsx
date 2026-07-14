import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "./redux-practice/user-fetch-app/components/UserList";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex justify-center py-10">
        <UserList />
      </div>
    </>
  );
}

export default App;
