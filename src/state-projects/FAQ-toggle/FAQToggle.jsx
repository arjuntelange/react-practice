import React, { useState } from "react";
import "./FAQToggle.css";

function FAQToggle() {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    setShowAnswer(prev => !prev);
  }

  return (
    <div className="container">
      <h2>What is React?</h2>
      <p>
        {showAnswer
          ? "React is a JavaScript library for building user interfaces."
          : ""}
      </p>
      <button onClick={toggleAnswer}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
    </div>
  );
}

export default FAQToggle;
