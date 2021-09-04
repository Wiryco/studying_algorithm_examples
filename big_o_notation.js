console.time('Execution Time -> ')
let array_test = [], total = 0;
// Cria um alias para a função de interface com o usuário
const readline = require("readline");

// A função create_array_size recebe como parâmetro o tamanho do array que vai ser criado
// OBS: O primeiro numero do array sempre será 0
function create_array_size(size) {
  return new Promise(async resolve => {
    for (let i = 0; i < size; i++) {
      array_test.push(i);
    }
    resolve(await sum_elements_array(array_test));
  });
};

// A função sum_elements_array recebe como parâmetro um array de numeros
function sum_elements_array(array) {
  return new Promise(resolve => {
    array.forEach(element => {
      total += element;
    });
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
interface_prompt.question('What is the size of the array to be measured?\n', async (size) => {
  // O valor captado pelo input é uma string
  // Converter a string digitada para numero inteiro. Se não for um numero, retorna erro no console
  let _time, _size = parseInt(size);
  if (Number.isInteger(_size)) {
    _time = await create_array_size(_size);
    console.log('Sum of array values -> ' + _time);
    interface_prompt.close();
  } else {
    console.log('Size not entered or information entered is not an integer!');
    interface_prompt.close();
  }
});

// Encerra a interface de usuário após o calculo
interface_prompt.on("close", () => {
  // Informa para o uduário o tempo de execução do algoritmo
  console.timeEnd('Execution Time -> ');
  process.exit(0);
});