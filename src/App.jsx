import "./App.css";
import { Footer } from "./components/Footer/Footer";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
