// NAO DEU CERTO
console.time('\nTempo total de execução do algoritmo => ');
const readline = require("readline");

function numeros_aleatorios() {
  return Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1); // Retorna numeros aleatórios
  //return Math.random(); Retorna numeros aleatórios entre 0 e 1
}

function preenche_array_automatico(tamanho) {
  return new Promise(async resolve => {
    let array_preenchido = [];
    for (let i = 0; i < tamanho; i++) {
      array_preenchido.push(numeros_aleatorios());
    }
    resolve(array_preenchido);
  });
}

function main(array) {
  return new Promise(resolve => {
    let lado_direito = [], sum_esquerdo = 0, sum_direito = 0, esquerdo_wins = 0;
    array.forEach(element => {
      lado_direito.push(element);
      sum_direito += element;
    });

    array.forEach(element => {
      counte++;
      sum_esquerdo += element;
      let item = lado_direito.shift();
      sum_direito += item;

      if (sum_esquerdo > sum_direito && lado_direito.length > 0)
        esquerdo_wins += 1;
    });
    resolve(esquerdo_wins);
  });
}

// ********************************************************
// ******* Implementação de interface no terminal *********
// ********************************************************

const interface_prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface_prompt.question('Qual o tamanho máximo do array de inteiros?\n=> ', async tamanho => {
  let _tamanho = parseInt(tamanho);
  if (!Number.isInteger(_tamanho)) {
    console.log('\n** ERROR ** -> Nenhum texto foi digitado!');
    interface_prompt.close();
  } else {
    let _array = await preenche_array_automatico(_tamanho);
    console.time('\nTempo total de execução da função => ');
    let result = await main(_array);
    console.timeEnd('\nTempo total de execução da função => ');
    console.log('\nLado esquedo venceu ', result, ' vezes o lado direito.');
    interface_prompt.close();
  }
});

// Encerra a interface de usuário após o toda a execução do algoritmo
interface_prompt.on("close", () => {
  // Informa para o uduário o tempo de execução do algoritmo
  console.timeEnd('\nTempo total de execução do algoritmo => ');
  process.exit(0);
});