import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/topics");
    }, 2000);
  }, []);

  return (
    <>
      <h2>LogIn Successful🥳</h2>
    </>
  );
}

export default Success;
