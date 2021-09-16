// Desafio HackerRank
// Código - Vinícius Andrade Lopes
// Jumping on the Clouds

function jumpingOnClouds(c) {
  // Write your code here
  let clouds = [], jump = 0, count = 0;
  c.forEach(element => {
    clouds.push(element == 0 ? true : false);
  });

  clouds.forEach((element, index) => {
    if (index < clouds.length - 1 && index == count) {
      if (element && clouds[count + 1] && clouds[count + 2]) {
        jump += 1;
        count += 2;
      } else if (clouds[count] && clouds[count + 1]) {
        jump += 1;
        count += 1;
      } else {
        let prox_cloud_safe = 0;
        if (element && !clouds[count + 1] && clouds[count + 2]) {
          jump += 1;
          count += 2;
        } else {
          clouds.forEach((element, idx) => {
            if (idx > count) {
              if (prox_cloud_safe == 0 && element) {
                prox_cloud_safe = idx;
              }
            }
          });
          jump += 1;
          count = prox_cloud_safe;
        }
      }
    }
  });

  return jump;
}

function main() {
  // const c = [0, 0, 1, 0, 0, 1, 0]; // Resposta = 4
  const c = [0, 0, 0, 1, 0, 0]; // Resposta = 3

  const result = jumpingOnClouds(c);

  console.log('Pulos -> ', result, ' \n');
}

main();