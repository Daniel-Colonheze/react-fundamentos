export default function List() {
  const usuarios = [
    { id: 1, nome: "Daniel", email: "daniel@gmail.com" },
    { id: 2, nome: "Daniela", email: "daniela@gmail.com" },
    { id: 3, nome: "Daniele", email: "daniele@gmail.com" },
  ];

  const lista = usuarios.map((usuarios) => (
    <li key={usuarios.id}>
      {usuarios.nome} ({usuarios.email})
    </li>
  ));

  return <ul>{lista}</ul>;
}
