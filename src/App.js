import logo1 from "./images/dictionary.png";
import SearchEngine from "./components/SearchEngine.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <img src={logo1} alt="logo" className="logo"/>
            Dictionary
          </h1>
        </header>
        <SearchEngine defaultKeyword="play"/>
      </div>
    </div>
  );
}
