import "./App.css";
import useMeme from "./hooks/useMeme";

function App() {
  const { meme } = useMeme();

  console.log(meme);

  return (
    <div className="app">
      <h1 className="heading">Top 10 Memes From Reddit</h1>
      <div className="meme-container">
        {meme &&
          meme.map((m) =>
            m.isVideo ? (
              <video key={m.id} src={m.url} autoPlay loop muted />
            ) : (
              <img key={m.id} src={m.url} alt="meme" />
            )
          )}
      </div>
      <div className="footer">
        <span>
          Made with ❤️ By &nbsp;
          <a href="https://github.com/SaptarsiRoy/" className="github-url">
            Saptarsi Roy
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
