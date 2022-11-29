import "./App.css";
import Header from "./components/Header";
import Contador from "./components/Contador";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header nomeGrupo="Alone" integrantes="Thaís Brito" />
      <Contador />
      <Footer nomeFooter="Feito com carinho por Thaís :)" />
    </div>
  );
}

export default App;
