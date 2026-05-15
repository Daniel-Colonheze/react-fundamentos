export function Acomodacao() {
  return (
    <div>
      <span>IMAGEM ACOMODACAO</span>
      <h1>Candido Mota, Brazil</h1>
      <p>Perto de Assis</p>
    </div>
  );
}

interface CabecalhoProps {
  titulo: string;
}

export function Cabecalho(props: CabecalhoProps) {
  return (
    <div className="bg-blue-600">
        <h1>Logo</h1>
        <p>{props.titulo}</p>
        {Menu()}
    </div>
  );
}

export function Menu() {
  return (
    <div className="bg-blue-700">
        <h1>Logo</h1>
        <p>Acomodacao | Experiencia</p>
    </div>
  );
}