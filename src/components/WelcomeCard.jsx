import React from "react";

function WelcomeCard(props) {
  function sayHi() {
    alert(`Hi ${props.name}! 🚀`);
  }

  return (
    <div>
      <h1>👋 Hi {props.name}</h1>
      <h3>{props.role}</h3>

      <button onClick={sayHi}>Say Hi</button>
    </div>
  );
}
export default WelcomeCard;
