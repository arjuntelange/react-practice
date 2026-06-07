import React, {useState} from "react";
import "./CharCount.css"

function CharCount() {
    const [text, setText] = useState("");

  return (
    <div className="container">
      <h1>📝 Character Counter</h1>

      <textarea value={text} onChange={(event) => setText(event.target.value)}></textarea>

      <h2>Characters: {text.length}</h2>
    </div>
  );
}

export default CharCount;
