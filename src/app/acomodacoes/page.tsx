import { Cabecalho, Conteudo, Menu, Rodape } from "../../components/interface";

export default function Page() {
  return (
    <div>
      <Cabecalho titulo="Turnix" subtitulo="Minhas acomodacoes"/>
      <Menu />
      <Conteudo>
          <h1>Pagina Acomodacoes</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati tenetur laborum soluta pariatur velit totam sit aperiam, culpa recusandae voluptatem, esse, quod consectetur. A quaerat impedit eius dignissimos corporis.
          </p>
      </Conteudo>
      <Rodape />
    </div>
  );
}
