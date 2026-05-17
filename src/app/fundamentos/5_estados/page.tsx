"use client";

import { useState } from "react";

export default function Page() {
  //let numero = 0

const [numero, setNumero] = useState(0)// [numero, function]

function incrementar() {
    //numero++
    setNumero( numero + 1)
    //console.log(numero);
  }

  return (
    <div>
      <h1>Estados</h1>
      <button className="bg-blue-400 p-2" onClick={incrementar}>
        Click
      </button>
      <p>Numero: {numero}</p>
    </div>
  );
}
