import { useEffect } from "react";
import { useState } from "react";
import ContadorPalpiteiro from "./Contador";

function Palpiteiro(ContadorPalpiteiro) {
  const [frases, setFrases] = useState("");

  const palpites = () => {
    switch (ContadorPalpiteiro) {
      case 0:
        msg = "E tem zero no bingo é?";
        break;

      default:
        msg = "Não sou capaz de opinar!";
        break;
    }

    document.write(msg);
  };

  useEffect(() => {
    setFrases();
  }, []);

  return (
    <p>{frases}</p>
  );
}
export default Palpiteiro;
