// Desenvolvido por Vinícius Andrade Lopes
console.time('\nTempo total de execução do algoritmo => ');
let matriz = [], total = 0;
// Cria um alias para a função de interface com o usuário
const readline = require("readline");

// A função create_array_size recebe como parâmetro o tamanho do array que vai ser criado
// OBS: O primeiro numero do array sempre será 0
function create_matriz_size(size, dimensions, model) {
  return new Promise(async resolve => {
    if (dimensions != 1) {
      for (let i = 0; i < dimensions; i++) {
        matriz.push([]);
        for (let j = 0; j < size; j++) {
          matriz[i].push(j);
        }
      }
    } else {
      for (let i = 0; i < size; i++) {
        matriz.push(i);
      }
    }

    if (model == 'S')
      resolve(await sum_elements_array(matriz, dimensions, size));
    else
      resolve(await return_one_element(matriz, dimensions, size));
  });
};

// A função sum_elements_array recebe como parâmetro um array de numeros
function sum_elements_array(matriz, dimensions, size) {
  return new Promise(resolve => {
    // Alterações feitas para calcular somente o tempo gasto para finalizar o loop de X elementos
    // Com isso, podemos medir o tempo gasto para execução do loop e demostrar a complexidade
    // do algoritmo com base no tamanho definido pelo usuário;
    // Retorna a soma de todos os elementos do array
    console.time('\nTempo de execução da matriz de ' + dimensions + ' dimensão(ões) e ' + size + ' elemento(s) => ');
    if (dimensions == 1) {
      matriz.forEach(element => {
        total += element;
      });
    } else {
      matriz.forEach(element => {
        element.forEach(value => {
          total += value;
        });
      });
    }
    console.timeEnd('\nTempo de execução da matriz de ' + dimensions + ' dimensão(ões) e ' + size + ' elemento(s) => ');
    resolve(total);
  });
};

// A função sum_elements_array recebe como parâmetro um array de numeros
function return_one_element(array, dimensions, size) {
  return new Promise(resolve => {
    // Não realiza calculo
    console.time('Tempo de execução da matriz de ' + dimensions + ' dimensão(ões) e ' + size + ' elemento(s) => ');
    if (dimensions == 1) {
      array.forEach(element => { });
    } else {
      array.forEach(element => { element.forEach(value => { }) });
    }
    console.log('\n** NÃO FEZ CALCULO **');
    console.timeEnd('Tempo de execução da matriz de ' + dimensions + ' dimensão(ões) e ' + size + ' elemento(s) => ');
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
// O exemplo em si são perguntas sobre a dimensão da matriz, tamanho de cada dimensão e o modelo de calculo
// Modelo este que pode calcular ou não os valores
interface_prompt.question('Quantas dimensões terá a matriz? => ', async (dimensions) => {
  interface_prompt.question('Qual é o tamanho de cada dimensão da matriz a ser medida? => ', async (size) => {
    interface_prompt.question('Você quer fazer o calculo dos elementos? S para Sim e N para Não => ', async (model) => {
      // O valor captado pelo input é uma string
      // Converter a string digitada para numero inteiro. Se não for um numero, retorna erro no console
      let _sum_array, _size = parseInt(size), _model = model.toUpperCase(), _dimensions = parseInt(dimensions);
      if (Number.isInteger(_size) && Number.isInteger(_dimensions)) {
        if (model) {
          if (_model != 'S' && _model != 'N') {
            console.log('\n ** ERRO ** -> A definição do modelo é somente com S ou N!\nFavor digitar o valor correto.');
            interface_prompt.close();
          } else {
            if (_model == 'S') {
              _sum_array = await create_matriz_size(_size, _dimensions, _model);
              console.log('\nSoma dos valores contidos no matriz => ' + _sum_array);
              console.log('\nConversão binária de ' + _sum_array + ' => ' + _sum_array.toString(2));
              interface_prompt.close();
            } else {
              _sum_array = await create_matriz_size(_size, _dimensions, _model);
              console.log('\nConversão binária de ' + _sum_array + ' => ' + _sum_array.toString(2));
              interface_prompt.close();
            }
          }
        } else {
          console.log('\n** ERRO ** -> Favor informar se deseja executar o modelo de soma ou o modelo que não realiza soma!');
          interface_prompt.close();
        }
      } else {
        console.log('\n** ERRO ** -> O tamanho ou a dimensão não foi inserida ou a informação inserida não é um número inteiro!');
        interface_prompt.close();
      }
    });
  });
});

// Encerra a interface de usuário após o calculo
interface_prompt.on("close", () => {
  // Informa para o uduário o tempo de execução do algoritmo
  console.timeEnd('\nTempo total de execução do algoritmo => ');
  process.exit(0);
});