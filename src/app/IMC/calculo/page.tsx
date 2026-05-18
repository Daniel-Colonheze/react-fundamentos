"use client";
import { useState } from "react";

export default function Calcular() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcula() {
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    const imc = p / (a * a);
    if (imc <= 18) {
      setResultado("Abaixo do peso");
    } else if (imc > 18 && imc < 25) {
      setResultado("Normal");
    } else {
      setResultado("Sobrepeso");
    }
  }

  return (
    <div>
      <h2>Digite seu peso</h2>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="campo-texto bg-gray-400 rounded-2xl"
      />
      KG
      <br />
      <h2>Digite sua altura</h2>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        className="campo-texto bg-gray-400 rounded-2xl"
      />
      M
      <br />
      <button onClick={calcula} className="botao">
        Calcular
      </button>
      <br /> <br />
      <span>Resultado: {resultado} </span>
    </div>
  );
}
