import photo from "./assets/1.jpg";
import "./App.css";

function App() {
  const photos = [{ src: photo, alt: "./assets/1.jpg" }];

  return (
    <div className="App">
      <header className="App-header">
        <img src={photos[0]} className="App-photo" alt="lala" />
        <p>First page</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
