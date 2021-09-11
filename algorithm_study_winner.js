// Algoritmo que verifica a sequência do carrinho de compra com a sequência a ser premiada
function verify_winner(codeList, shoppingCart) {
    let code_idx = 0;

    shoppingCart.forEach(element => {
        if (element == codeList[code_idx] || (codeList[code_idx] == 'anything' && element)) {
            code_idx++;
        } else {
            code_idx = 0;
        }
    });

    if (codeList.length > code_idx)
        return 0;

    return 1;
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
    let codeList = ['laranja', 'maçã maçã', 'anything laranja maçã', 'banana'];
    let shoppingCart = ['laranja', 'maçã', 'maçã', 'ouro', 'laranja', 'maçã', 'banana'];

    let codeList_Format = await format_codeList(codeList);

    const result = verify_winner(codeList_Format, shoppingCart);

    console.log(result + '\n');
}

main();