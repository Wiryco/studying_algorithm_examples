// Dividir um array em 2 e calcular
// quantas vezes a soma dos elementos do lado esquerdo foi maior que
// a soma dos elementos do lado direito

function soma_elementos(array) {
  let tamanho = array.length, sum_esquerdo = 0, sum_direito = 0, esquerdo_wins = 0, lado_direito;
  array.forEach((esquerdo, idx_e) => {
    sum_esquerdo += esquerdo;
    if (idx_e + 1 < tamanho) {
      lado_direito = array.slice(idx_e + 1, tamanho);
      lado_direito.forEach(element => {
        sum_direito += element;
      });

      if (sum_esquerdo > sum_direito)
        esquerdo_wins += 1;

      sum_direito = 0
    }
  });
  return esquerdo_wins;
}

function main() {
  //const array = [10, -5, 6, 50, 4, 5, 6];
  const array = [10, -5, 6, 50, 4, 5, 6, 1];

  const result = soma_elementos(array);

  console.log(result, ' \n');
}

main();