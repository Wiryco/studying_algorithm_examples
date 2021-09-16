// Criado por Vinicius Andrade Lopes
// Objetivo: encontrar o primeiro caractere que não se repete dentro de uma string
// Por exemplo: uma string 'aaabbbcdcdoarr'
// O primeiro caractere que não se repete é o 'o'

// Interação com o terminal
const readline = require("readline");
let caracter = '', count = 0;

function firstNonRepeatingCaractere(str) {
  return new Promise(resolve => {
    // O(n²)
    for (let i = 0; i < str.length; i++) { // O(n)
      for (let j = 0; j < str.length; j++) { // O(n)
        if (str.substr(i, 1) == str.substr(j, 1))
          count += 1; // O(1)
      }

      if (count == 1) {
        caracter = str.substr(i, 1);
        resolve('O caractere _ ' + caracter + ' _ é o primeiro a não se repetir');
      } else {
        count = 0;
      }
    }

    if (!caracter)
      resolve('Todos os caracteres se repetem!');
  });
}


// ********************************************************
// ******* Implementação de interface no terminal *********
// ********************************************************
let question = '\n****************************************************************************************************\n';
question += '***** Bem vindo ao algoritmo que procura o primeiro caractere que não se repete dentro do texto ****\n';
question += '****************************************************************************************************\n\n';
question += 'Agora digite a string a ser analisada pelo algoritmo!\n==> ';
const interface_prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface_prompt.question(question, async (str) => {
  if (!str) {
    console.log('\n** ERROR ** Nenhum texto foi digitado!');
    interface_prompt.close();
  } else {
    console.log(await firstNonRepeatingCaractere(str));
    interface_prompt.close();
  }
});

// Encerra a interface de usuário após o toda a execução do algoritmo
interface_prompt.on("close", () => {
  process.exit(0);
});