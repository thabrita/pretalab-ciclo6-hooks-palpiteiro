import { useEffect } from "react";
import { useState } from "react";
import flork from '../assets/flork.png';
import Contador from './Contador'

const Palpiteiro = ({ valor }) => {
  const [frases, setFrases] = useState("");

  const palpites = () => {
    switch (valor) {
      case 0:
        msg = "E tem zero no bingo é?";
        break;
      case 1:
        return "Hello World!";
      case 10:
        return "De romboo"
      case 11:
        return "As canelas de odete"
      case 12:
        return "Vitamina B12"
      default:
        return "Não sou capaz de opinar!";
    }
  };

  // useEffect(() => {
  //   // frases 
  //   // ? setFrases((palpites))
  //   // : setFrases("É aquilo")
  //   setFrases((palpites))
  // }, []);

  useEffect(() => {
    function exibirFrases() {
      setFrases((palpites));
    }

    exibirFrases()
  })

  return (
    <>
      <h3>Palpitometro</h3>
      <p>{frases}</p>

      {/* imagem pela url */}
      {/* <img 
      src="https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-97-png.png" 
      alt="flork com carinha felz juntando os dedos indicadores na altura do toráx" 
      width="45px"
      /> */}

      {/* imagem local */}
      <img
        src={flork}
        alt=""
        width="45px"
      />

    </>
  );
}

export default Palpiteiro;
