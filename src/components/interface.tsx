import Link from "next/link";

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
  subtitulo: string;
}

export function Cabecalho(props: CabecalhoProps) {
  return (
    <div className="bg-blue-600">
      <p>{props.titulo}</p>
      <p>{props.subtitulo}</p>
    </div>
  );
}

export function Menu() {
  return (
    <div className="bg-gray-300">
      <MenuItem texto="Home" url="/react-fundamentos/src/app/principal"/>
      <MenuItem texto="Acomodacoes" url="/react-fundamentos/src/app/principal"/>
      <MenuItem texto="Imagens" url="/react-fundamentos/src/app/principal"/>
    </div>
  );
}

export function MenuItem( props: any)  {
  return (
    <Link href={ props.children } className="p-2">
      {props.texto}
    </Link>
  );
}

export function Rodape() {
  return (
    <div className="bg-blue-300">
      <p>Todos os direitos reservados</p>
    </div>
  );
}

type conteudoprops ={
  children: React.ReactNode
}

export function Conteudo( props: conteudoprops) {
  console.log(props)
  return (
    <div className="bg-blue-300">
      {props.children}
    </div>
  );
}
