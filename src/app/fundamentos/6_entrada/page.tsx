'use client'
import { useState } from "react"

export default function Entrada() {
 
    const [valor, setValor] = useState("Iniciar")
 
    function alteraValor( e: React.ChangeEvent<HTMLInputElement> ){
        setValor( e.target.value )
    }

    return (
    <div>
      <h1>Entrada</h1>
      <input
        type="text"
        className="border-red-600 rounded-2xl"
        // onChange={e => setValor( e.target.value )}
        onChange={ alteraValor }
        value={valor}
      />

      <h4>Valor digitado: {valor}</h4>
    </div>
  );
}
