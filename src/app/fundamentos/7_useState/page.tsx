"use client";

import { useState } from "react";

export default function App() {
  // Estado
  const [contador, setContador] = useState(0);

  // Função para aumentar
  function aumentar() {
    setContador(contador + 1);
  }

  // Função para diminuir
  function diminuir() {
    setContador(contador - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100">
      <h1 className="text-5xl font-bold">{contador}</h1>

      <div className="flex gap-4">
        <button
          onClick={diminuir}
          className="bg-red-500 text-white px-6 py-3 rounded-xl"
        >
          -
        </button>

        <button
          onClick={aumentar}
          className="bg-green-500 text-white px-6 py-3 rounded-xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
