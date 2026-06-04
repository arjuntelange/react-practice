import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <div>
        <ProfileCard name="Arjun" role="Full Stack Developer" />
        <ProfileCard name="Rahul" role="Frontend Developer" />
        <ProfileCard name="Priya" role="UI Designer" />
      </div>
    </>
  );
}

export default App;
