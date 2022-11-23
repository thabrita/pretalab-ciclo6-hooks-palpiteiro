import "./App.css";
import Header from "./components/Header";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <Header nomeGrupo="Alone" integrantes="Thaís Brito" />
      <Contador />
    </div>
  );
}

export default App;
