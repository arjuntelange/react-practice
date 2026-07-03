import React from "react";
import { useNavigate } from "react-router-dom";

function Profiles() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <h2>Welcome Arjun!</h2>
      <p>Select a section from the sidebar.</p>
      <button onClick={handleClick}>LogOut</button>
    </div>
  );
}

export default Profiles;
