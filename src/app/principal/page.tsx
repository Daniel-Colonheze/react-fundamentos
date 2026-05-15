import { Acomodacao, Cabecalho } from "@/src/components/interface"

export default function Page() {
  return (
    <div>
        {Cabecalho()}
        <hr />
        {Acomodacao()}
        <hr /> 
    </div>
)
}
