import "bulma/css/bulma.min.css";
import { Pokemon } from "./components/Pokemon";
import data from "./data";
function App() {
  return (
    <div className="container">
      <h1 className="has-text-centered is-size-1">Pokedex</h1>
      <div className="columns is-multiline is-centered ">
        {data.map((pokemon) => (
          <Pokemon Pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
