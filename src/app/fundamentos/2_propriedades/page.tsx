import { Cabecalho, Acomodacao } from "@/src/components/interface"



export default function Page(){
    return(
        <div>
            <Cabecalho titulo = "Cm, Brasil" subtitulo = "Cidade" />
            <hr />
            <Acomodacao />
        </div>
    )
}