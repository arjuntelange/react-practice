import React from "react";
import "./ProfileCard.css";

function ProfileCard({name, role}) {
  function follow() {
    alert(`Following ${name}`);
  }

  return (
    <div className="profile-card">
      <p>👤</p>
      <h2>{name}</h2>
      <h3>{role}</h3>

      <button onClick={follow}>Follow</button>
    </div>
  );
}

export default ProfileCard;
