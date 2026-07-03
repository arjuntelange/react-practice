import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  const userNames = {
    1: "Arjun",
    2: "Priya",
    3: "Rahul",
  };

  return (
    <>
      <h2>Profile of {userNames[id]}</h2>
      <p>User ID: {id}</p>
    </>
  );
}

export default UserProfile;
