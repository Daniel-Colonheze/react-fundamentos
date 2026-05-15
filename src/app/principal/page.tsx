function Acomodacao() {
  return (
    <div>
      <span>IMAGEM ACOMODACAO</span>
      <h1>Candido Mota, Brazil</h1>
      <p>Perto de Assis</p>
    </div>
  );
}

export default function Page() {
    const nome = 'Daniel'
  return (
    <div>
        {Acomodacao()}
        <hr /> 
        {nome}
    </div>
)
}
