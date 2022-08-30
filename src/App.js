import "./App.css";
import useMeme from "./hooks/useMeme";

function App() {
  const { meme } = useMeme();

  console.log(meme);

  return (
    <div className="app">
      {meme &&
        meme.map((m) =>
          m.isVideo ? (
            <video key={m.id} src={m.url} autoPlay loop muted />
          ) : (
            <img key={m.id} src={m.url} alt="meme" />
          )
        )}
    </div>
  );
}

export default App;
