import React from "react";

function Settings() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <h2>Settings⚙️</h2>
      <p>👤 Change Username</p>
      <p>📧 Change Email</p>
      <p>🔒 Change Password</p>
    </div>
  );
}

export default Settings;
