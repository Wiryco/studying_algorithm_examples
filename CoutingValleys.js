// Desafio HackerRank
// Código - Vinícius Andrade Lopes
// Couting Valleys

function countingValleys(steps, path) {
  // Write your code here
  let nivel = 0, vales_visitados = 0, array_path = path.split('');
  if (steps >= 2) {
    array_path.forEach(element => {
      if (element == 'U' && nivel == -1)
        vales_visitados += 1;

      if (element == 'D')
        nivel -= 1;
      else
        nivel += 1;
    });
  }

  return vales_visitados;
}

function main() {
  const path = 'UDDDUDUU';
  const steps = path.length;

  const result = countingValleys(steps, path);

  console.log('Vales visitados -> ', result);
}

main();