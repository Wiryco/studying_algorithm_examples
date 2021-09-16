// Cria um alias para a função de interface com o usuário
const readline = require("readline");
let arvore_text = '';
const arvore_principal = {};

function adiciona_valor_arvore(_arvore, valor) {
  return new Promise(resolve => {
    if (_arvore.valor) {
      if (valor < _arvore.valor) {
        adiciona_valor_arvore(_arvore.esquerda, valor);
      } else {
        adiciona_valor_arvore(_arvore.direita, valor);
      }
    } else {
      _arvore.esquerda = {};
      _arvore.direita = {};
      _arvore.valor = valor;
      resolve(_arvore);
    }
  });
}

function numeros_aleatorios(maximo) {
  return Math.floor(Math.random() * maximo + 1); // Retorna numeros aleatórios entre 1 e Maximo
  //return Math.random(); Retorna numeros aleatórios entre 0 e 1
}

function preenche_arvore_automatica(tamanho) {
  return new Promise(async resolve => {
    for (let i = 0; i < tamanho; i++) {
      adiciona_valor_arvore(arvore_principal, numeros_aleatorios(999));
    }
    resolve(arvore_principal);
  });
}

function preenche_arvore_manual(tamanho_total, posicao) {
  if (posicao < tamanho_total) {
    interface_prompt.question('\nQual o valor da posição ' + (posicao + 1) + ' da árvore de ' + tamanho_total + ' posições?\n=> ', async valor => {
      let _valor = parseInt(valor);

      if (!Number.isInteger(_valor)) {
        console.log('\n** ERROR ** -> Nenhum texto foi digitado ou o valor não é um numero inteiro!');
        interface_prompt.close();
      } else {
        adiciona_valor_arvore(arvore_principal, _valor);
        preenche_arvore_manual(tamanho_total, posicao + 1);
      }
    });
  } else {
    printViewArvore(arvore_principal);
    interface_prompt.close();
  }
}

function printViewArvore(arvore) {
  return new Promise(resolve => {
    console.log(arvore);
    interface_prompt.close();
  });
}


// ********************************************************
// ******* Implementação de interface no terminal *********
// ********************************************************
let pergunta, _arvore_preenchida;

const interface_prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface_prompt.question('Qual o tamanho máximo de numeros na árvore?\n=> ', async tamanho => {
  let _tamanho_da_arvore = parseInt(tamanho);

  if (!Number.isInteger(_tamanho_da_arvore)) {
    console.log('\n** ERROR ** -> Nenhum texto foi digitado!');
    interface_prompt.close();
  } else {
    if (_tamanho_da_arvore == 0) {
      console.log('\n** ERROR ** -> Arvore de tamanho 0 não pode ser preenchida!');
      interface_prompt.close();
    }

    if (_tamanho_da_arvore == 1) {
      pergunta = '\nVocê pode optar por um preenchimento automático da arvore de tamanho ' + _tamanho_da_arvore + ' ';
      pergunta += 'ou voce pode preencher a posição manualmente.'
    } else {
      pergunta = '\nVocê pode optar por um preenchimento automático da arvore de tamanho ' + _tamanho_da_arvore + ' com numeros aleatórios\n';
      pergunta += '(Números inteiros aleatórios entre 1 e 999) ';
      pergunta += 'ou voce pode preencher todas as ' + _tamanho_da_arvore + ' posições manualmente.';
    }

    pergunta += '\n\nO que voce deseja? Digite A para preenchimento Automático e M para preenchimento Manual\n=> ';

    interface_prompt.question(pergunta, async resposta => {
      let _responsta = resposta.toUpperCase();
      if (_responsta != 'A' && _responsta != 'M') {
        console.log('\n** ERROR ** -> Para o devido funcionamento do algoritmo, escolhe apenas entre A (Automático) ou M (Manual)!');
        interface_prompt.close();
      } else {
        if (_responsta == 'A') {
          _arvore_preenchida = await preenche_arvore_automatica(_tamanho_da_arvore);
          printViewArvore(_arvore_preenchida);
        } else {
          preenche_arvore_manual(_tamanho_da_arvore, 0);
        }
      }
    });
  }
});

// Encerra a interface de usuário após o toda a execução do algoritmo
interface_prompt.on("close", () => {
  process.exit(0);
});