import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";

function UserList() {
  const { users, loading, error } = useSelector((state) => state.usersData);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-3xl bg-slate-900 rounded-3xl p-8 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">User Directory</h2>

        <button
          onClick={() => dispatch(fetchUsers())}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white rounded-xl font-semibold transition"
        >
          Fetch Users
        </button>
      </div>

      {loading && <p className="text-blue-400 font-medium">Loading users...</p>}

      {error && <p className="text-red-400 font-medium">{error}</p>}

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-slate-800 rounded-2xl p-5 shadow-md hover:shadow-xl hover:opacity-80 transition"
          >
            <h3 className="text-xl font-bold text-white">{user.name}</h3>

            <p className="text-slate-300">@{user.username}</p>

            <p className="text-slate-400">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
