import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import WelcomeCard from "./components/WelcomeCard";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <WelcomeCard name="Arjun" role="Full Stack Developer" />
        <WelcomeCard name="Rahul" role="Frontend Developer" />
      </div>
    </>
  );
}

export default App;
