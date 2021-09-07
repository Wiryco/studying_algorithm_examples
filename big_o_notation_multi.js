// Desenvolvido por Vinícius Andrade Lopes
console.time('\nTempo total de execução do algoritmo => ');
let vetor = [], total = 0;
// Cria um alias para a função de interface com o usuário
const readline = require("readline");

// A função create_array_size recebe como parâmetro o tamanho do array que vai ser criado
// OBS: O primeiro numero do array sempre será 0
function create_array_size(size, model) {
  return new Promise(async resolve => {
    for (let i = 0; i < size; i++) { // O(n)
      vetor.push(i); // O(1)
    }
    if (model == 'S')
      resolve(await sum_elements_array(vetor, size));
    else
      resolve(await return_one_element(vetor, size));
  });
};

// A função sum_elements_array recebe como parâmetro um array de numeros
function sum_elements_array(array, size) {
  return new Promise(resolve => {
    // Alterações feitas para calcular somente o tempo gasto para finalizar o loop de X elementos
    // Com isso, podemos medir o tempo gasto para execução do loop e demostrar a complexidade
    // do algoritmo com base no tamanho definido pelo usuário;
    // Retorna a soma de todos os elementos do array
    console.time('\nTempo de execução do vetor de ' + size + ' elemento(s) => ');
    array.forEach(element => { // O(n)
      total += element; // O(1)
    });
    console.timeEnd('\nTempo de execução do vetor de ' + size + ' elemento(s) => ');
    resolve(total);
  });
};

// A função sum_elements_array recebe como parâmetro um array de numeros
function return_one_element(array, size) {
  return new Promise(resolve => {
    // Não realiza calculo
    console.time('\nTempo de execução do vetor de ' + size + ' elemento(s) ** NÃO FEZ CALCULO ** => ');
    array.forEach(element => { // O(n)
    });
    console.timeEnd('\nTempo de execução do vetor de ' + size + ' elemento(s) ** NÃO FEZ CALCULO ** => ');
    resolve(total);
  });
};

// Declaração de input e output pelo terminal
// Cria a interface de input e output do usuário
const interface_prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Cria as interações com o usuário via terminal
// O exemplo em si é uma pergunta sobre o tamanho do array que o usuário quer mensurar
interface_prompt.question('Qual é o tamanho do vetor a ser medido? => ', async (size) => {
  interface_prompt.question('Você quer fazer o calculo dos elementos? S para Sim e N para Não => ', async (model) => {
    // O valor captado pelo input é uma string
    // Converter a string digitada para numero inteiro. Se não for um numero, retorna erro no console
    let _sum_array, _size = parseInt(size), _model = model.toUpperCase();
    if (Number.isInteger(_size)) {
      if (model) {
        if (_model != 'S' && _model != 'N') {
          console.log('\nA definição do modelo é somente com S ou N!\nFavor digitar o valor correto.');
          interface_prompt.close();
        } else {
          if (_model == 'S') {
            _sum_array = await create_array_size(_size, _model);
            console.log('\nSoma dos valores contidos no vetor => ' + _sum_array);
            console.log('\nConversão binária de ' + _sum_array + ' => ' + _sum_array.toString(2));
            interface_prompt.close();
          } else {
            _sum_array = await create_array_size(_size, _model);
            console.log('\nConversão binária de ' + _sum_array + ' => ' + _sum_array.toString(2));
            interface_prompt.close();
          }
        }
      } else {
        console.log('Favor informar se deseja executar o modelo de soma ou o modelo que não realiza soma!');
        interface_prompt.close();
      }
    } else {
      console.log('O tamanho não foi inserido ou a informação inserida não é um número inteiro!');
      interface_prompt.close();
    }
  });
});

// Encerra a interface de usuário após o calculo
interface_prompt.on("close", () => {
  // Informa para o uduário o tempo de execução do algoritmo
  console.timeEnd('\nTempo total de execução do algoritmo => ');
  process.exit(0);
});