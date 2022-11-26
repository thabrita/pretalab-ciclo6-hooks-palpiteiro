import { useEffect } from "react";
import { useState } from "react";
import ContadorPalpiteiro from "./Contador";
import flork from '../assets/flork.png'

const Palpiteiro = ({ valor }) => {
  // function Palpiteiro(ContadorPalpiteiro) {
  //   const [frases, setFrases] = useState("");

  //   const palpites = () => {
  //     switch (ContadorPalpiteiro) {
  //       case 0:
  //         msg = "E tem zero no bingo é?";
  //         break;

  //       default:
  //         msg = "Não sou capaz de opinar!";
  //         break;
  //     }

  //     document.write(msg);
  //   };

  //   useEffect(() => {
  //     setFrases();
  //   }, []);

  return (
    <>
      <h3>Palpitometro</h3>
      <p>E tem zero no bingo é?</p>

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
