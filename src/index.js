import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [valor, setValor] = useState(0);
  const [operador, setOperador] = useState("");

  const atualizarInput = event => {
    if (event.target.name === "num1") {
      setNum1(event.target.value);
    } else {
      setNum2(event.target.value);
    }
  };

  const somar = () => {
    setValor(parseInt(num1) + parseInt(num2));
    setOperador("+");
  };
  const substrair = () => {
    setValor(parseInt(num1) - parseInt(num2));
    setOperador("-");
  };
  const dividir = () => {
    setValor(parseInt(num1) / parseInt(num2));
    setOperador("/");
  };
  const multiplicar = () => {
    setValor(parseInt(num1) * parseInt(num2));
    setOperador("*");
  };

  const limpar = () => {
    setValor(0);
    setOperador("");
    setNum1(0);
    setNum2(0);
  };

  return (
    <div>
      <input type="number" name="num1" value={num1} onChange={atualizarInput} />
      <input type="number" name="num2" value={num2} onChange={atualizarInput} />
      <br />
      <br />
      <button onClick={somar}>Somar</button>
      <button onClick={substrair}>Substrair</button>
      <button onClick={dividir}>Dividir</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <br />
      <br />
      <MostrarResultados
        num1={num1}
        operador={operador}
        num2={num2}
        valor={valor}
      />
      <br />
      <button onClick={limpar}>Limpar</button>
    </div>
  );
}

function MostrarResultados({ num1, operador, num2, valor }) {
  return (
    <div>
      <br />
      {operador === "" ? (
        ""
      ) : (
        <p className="operacao">
          {num1} {operador} {num2}
        </p>
      )}
      <br />
      <h1 className="resultadoCalc">{valor}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Calculadora />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
