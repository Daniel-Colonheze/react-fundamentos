export default function Page(){
    const usuario = {
        nome: "Daniel",
        urlPerfil: "https://images.pexels.com/photos/33740787/pexels-photo-33740787.jpeg"
    }

    return (
        <div>
            <h1>Imagens</h1>
            <img src={usuario.urlPerfil}
            alt={"Nome: " + usuario.nome}
            style={
                {width:90, height: 90}
            }
            />
        </div>
    )
}