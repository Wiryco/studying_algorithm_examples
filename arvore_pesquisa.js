const arvore = {};

function adiciona_valor_arvore(_arvore, valor) {
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
    return _arvore;
  }
}

adiciona_valor_arvore(arvore, 10);
adiciona_valor_arvore(arvore, 12);
adiciona_valor_arvore(arvore, 9);
adiciona_valor_arvore(arvore, 13);
console.log(arvore);