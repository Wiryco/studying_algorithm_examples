function verify_winner(codeList, shoppingCart) {
    console.log('Code -> ', codeList);
    console.log('Shopping -> ', shoppingCart);

    let elementos_iguais = [], elemento_diferente;

    codeList.forEach((element, index) => {
        if (element == shoppingCart[index])
            elementos_iguais.push(true);
        else if (shoppingCart[index] && shoppingCart[index] == 'anything')
            elementos_iguais.push(true);
        else
            elementos_iguais.push(false);
    });

    elemento_diferente = elementos_iguais.filter(element => !element);

    let winner = elemento_diferente.length > 0 ? 0 : 1;
    return winner;
}

function format_codeList(codeList) {
    return new Promise(resolve => {
        let array_codeList_format = [], cod_elemento;
        codeList.forEach(element => {
            cod_elemento = element.split(' ');
            cod_elemento.forEach(cod_uniq => {
                array_codeList_format.push(cod_uniq);
            });
        });
        resolve(array_codeList_format);
    });
}

async function main() {
    let codeList = ['laranja', 'maçã maçã', 'banana laranja maçã', 'banana'];
    let shoppingCart = ['laranja', 'maçã', 'maçã', '', 'laranja', 'maçã', 'banana'];

    let codeList_Format = await format_codeList(codeList);

    const result = verify_winner(codeList_Format, shoppingCart);

    console.log(result + '\n');
}

main();