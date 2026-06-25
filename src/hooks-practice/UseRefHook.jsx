import React, { useRef } from "react";

function UseRefHook() {
  const inputRef = useRef();

  function handleFocus() {
    inputRef.current.focus();
  }

  function clearInput() {
    inputRef.current.value = "";
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Enter your name" />

      <button onClick={handleFocus}>Focus Input</button>

      <button onClick={clearInput}>Clear Input</button>
    </div>
  );
}

export default UseRefHook;
