// Desafio HackerRank
// Código - Vinícius Andrade Lopes
// Sales by Match

function sockMerchant(ar) {
    // Write your code here
    let repete = 0, array_aux = [], pares = 0;
    ar.forEach(element1 => {
        if (array_aux.indexOf(element1) == -1) {
            ar.forEach(element2 => {
                if (element1 == element2)
                    repete += 1;
            });

            if (repete && repete > 1) {
                if (repete % 2 == 0)
                    pares += parseInt(repete / 2);
                else if (repete == 1)
                    pares += 1
                else
                    pares += (repete - 1) / 2;

                repete = 0;
                array_aux.push(element1);
            } else {
                repete = 0;
                array_aux.push(element1);
            }
        }

    });
    return pares;
}

function main() {

    //const array = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
    const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];

    const result = sockMerchant(array);

    console.log(result, ' \n');
}

main();