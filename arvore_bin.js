// Criado por Vinícius Andrade Lopes
class arvore {
  esquerda = '';
  direita = '';
  valor = '';
}

let tree = {
  esquerda: {
    esquerda: {
      esquerda: undefined,
      direita: undefined,
      valor: 2
    },
    direita: undefined,
    valor: 3
  },
  direita: {
    esquerda: undefined,
    direita: {
      equerda: undefined,
      direita: undefined,
      valor: 5
    },
    valor: 4
  },
  valor: 1
};

function pre_visualization(arvore) {
  console.log(arvore.valor);
  if (arvore.direita) pre_visualization(arvore.direita);
  if (arvore.esquerda) pre_visualization(arvore.esquerda);
}

function in_visualization(arvore) {
  if (arvore.direita) in_visualization(arvore.direita);
  console.log(arvore.valor);
  if (arvore.esquerda) in_visualization(arvore.esquerda);
}

function pos_visualization(arvore) {
  if (arvore.direita) pos_visualization(arvore.direita);
  if (arvore.esquerda) pos_visualization(arvore.esquerda);
  console.log(arvore.valor);
}

// Imprime o nó rapiz e depois imprime todos os nós folha da direita;
// Em seguida imprime todos os nós folhas da esquerda;
// Exemplo:
//   1
//  3 4
// 2   5
// Resultado: 1, 4, 5, 3, 2
console.log('******* PRE *******');
pre_visualization(tree);
console.log('*******************\n');

// Imprime todos os nós folha da direita;
// Imprime o nó raiz;
// Em seguida, imprime todos os nós folha da esquerda;
// Ou seja, imprime a arvore de trás para frente;
// Exemplo:
//   1
//  3 4
// 2   5
// Resultado: 5, 4, 1, 3, 2
console.log('******* IN *******');
in_visualization(tree);
console.log('******************\n');

// Imprime todos a direita do nó raiz;
// Depois imprime todos a esquerda do nó raiz;
// Por último imprime o nó raiz;
// Exemplo:
//   1
//  3 4
// 2   5
// Resultado: 5, 4, 2, 3, 1
console.log('******* POS *******');
pos_visualization(tree);
console.log('*******************\n');