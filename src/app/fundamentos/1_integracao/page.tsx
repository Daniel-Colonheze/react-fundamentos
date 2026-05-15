/*
  INTEGRAÇÃO NO REACT (JSX)
  
  JSX permite escrever HTML dentro do JavaScript no React.
  A regra básica é: TUDO que estiver dentro de chaves {} é JavaScript puro.
  Isso permite integrar variáveis, funções, expressões e componentes dentro do HTML.
 */

export default function Page() {
  // 1. INTEGRANDO UMA VARIÁVEL SIMPLES
  const nome = "João";
  const idade = 25;
  
  // 2. INTEGRANDO UMA EXPRESSÃO CONDICIONAL (Ternário)
  const regra = idade >= 18 ? <h1>Maior de idade</h1> : <h1>Menor de idade</h1>;
  
  // 3. INTEGRANDO UMA FUNÇÃO (Arrow Function)
  const saudacao = (pessoa: string) => `Olá, ${pessoa}!`;
  
  // 4. INTEGRANDO UMA EXPRESSÃO ARITMÉTICA
  const resultado = 10 + 5;
  
  // 5. INTEGRANDO UM ARRAY (map para renderizar lista)
  const itens = ["Maçã", "Banana", "Laranja"];
  
  // 6. INTEGRANDO UM OBJETO (acessando propriedades)
  const usuario = {
    nome: "Maria",
    email: "maria@email.com"
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Integração no React (JSX)</h1>
      
      {/* Exemplo 1: Variável simples */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>1. Variável Simples</h3>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
      </div>
      
      {/* Exemplo 2: Expressão condicional (ternário) */}
      <div style={{ backgroundColor: '#e0f0e0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>2. Condicional (Ternário)</h3>
        {regra}
      </div>
      
      {/* Exemplo 3: Função */}
      <div style={{ backgroundColor: '#f0e0e0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>3. Função</h3>
        <p>{saudacao("Carlos")}</p>
        <p>{saudacao("Ana")}</p>
      </div>
      
      {/* Exemplo 4: Expressão aritmética */}
      <div style={{ backgroundColor: '#f0f0e0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>4. Expressão Aritmética</h3>
        <p>10 + 5 = {resultado}</p>
        <p>20 * 3 = {20 * 3}</p>
        <p>100 / 4 = {100 / 4}</p>
      </div>
      
      {/* Exemplo 5: Array com map */}
      <div style={{ backgroundColor: '#e0e0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>5. Array (Lista)</h3>
        <ul>
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      {/* Exemplo 6: Objeto */}
      <div style={{ backgroundColor: '#f0e0e0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>6. Objeto</h3>
        <p>Nome: {usuario.nome}</p>
        <p>Email: {usuario.email}</p>
      </div>
      
      {/* Exemplo 7: Boolean (renderização condicional com &&) */}
      <div style={{ backgroundColor: '#e0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>7. Renderização Condicional (&&)</h3>
        <p>Logado: {true && <span style={{ color: 'green' }}>Sim</span>}</p>
        <p>Deslogado: {false && <span style={{ color: 'red' }}>Não</span>}</p>
      </div>
      
      {/* Exemplo 8: Template Literals (template strings) */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>8. Template Literals</h3>
        <p>{`Usuário ${nome} tem ${idade} anos`}</p>
      </div>
      
      {/* Exemplo 9: Componente interno */}
      <div style={{ backgroundColor: '#e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3>9. Componente Interno</h3>
        <ComponenteInterno nome="Pedro" />
      </div>
    </div>
  );
}

// Componente separado para demonstrar integração
function ComponenteInterno({ nome }: { nome: string }) {
  return (
    <div>
      <p>Olá, {nome}! Este é um componente integrado.</p>
    </div>
  );
}

/**
 * RESUMO DA SINTAXE:
 * 
 * - { } chaves = JavaScript puro
 * - { variavel } = exibe o valor da variável
 * - { expressao } = calcula e exibe o resultado
 * - { condicao ? valor1 : valor2 } = ternário para condicionais
 * - { array.map() } = renderiza listas
 * - { true && <elemento /> } = renderiza condicionalmente
 * - { `texto ${variavel}` } = template literals
 * - { <Componente /> } = renderiza outro componente
 */
