import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <div className="movies-container">
        <MovieCard
          title="Interstellar"
          rating="8.7"
          year="2014"
          genre="Sci-Fi"
          trailer="https://www.youtube.com/watch?v=zSWdZVtXT7E"
        />

        <MovieCard
          title="Inception"
          rating= "8.8"
          year="2010"
          genre="Sci-Fi"
          trailer="https://www.youtube.com/watch?v=YoHD9XEInc0"
        />

        <MovieCard
          title="The Dark Knight"
          rating= "9.1"
          year="2008"
          genre="Action/Crime"
          trailer="https://www.youtube.com/watch?v=EXeTwQWrcwY"
        />
      </div>
    </>
  );
}

export default App;
