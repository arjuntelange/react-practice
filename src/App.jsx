import "./App.css";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <div>
        <SocialLinks platform="LinkedIn" url="https://www.linkedin.com/feed/" />
        <SocialLinks platform="GitHub" url="https://github.com/" />
        <SocialLinks platform="Portfolio" url="https://arjuntelange.github.io/portfolio-website/" />
      </div>
    </>
  );
}

export default App;
