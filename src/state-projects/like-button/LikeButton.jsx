import React, { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="container">
      <h1>
        ❤️ {likes} {likes === 1 ? "Like" : "Likes"}
      </h1>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default LikeButton;
