import { useState } from "react";

/*imutabilidade - uma variável nao poderá ter o seu valor alterado diretamente,
e sim ter um novo valor associado a ela. Portanto na prática o que acontece é o
seguinte: eu sempre crio um novo espaço na memória contendo a minha nova informação
em vez de alterar uma informação que já está salva na memória.

Prós: performance => Apontar pra um novo espaço em memória em vez de comparar
com a variável que já tinhamos armazenada em memória.
*/

// usuarios = ['diego3g', 'diegosf', 'danileao']

// usuarios.push('rafacamarda')

// novoUsuarios = [...usuarios, 'rafacamarda'] => imutabilidade

export function Counter(){
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}