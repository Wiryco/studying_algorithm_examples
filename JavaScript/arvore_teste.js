// class novo_elemento_arvore {
//   constructor(_arvore, valor_novo_elemento) {
//     this._arvore = _arvore; this.valor_novo_elemento = valor_novo_elemento;
//   }

//   get adiciona_valor_arvore() {
//     if (this._arvore.valor) {
//       if (valor < this._arvore.valor) {
//         adiciona_valor_arvore(this._arvore.esquerda, valor);
//       } else {
//         adiciona_valor_arvore(this._arvore.direita, valor);
//       }
//     } else {
//       this._arvore.esquerda = {};
//       this._arvore.direita = {};
//       this._arvore.valor = this.valor_novo_elemento;
//       return this._arvore;
//     }
//   }
// }

class arvore {
  adicionaNovoValorArvore(_arvore, _valor) {
    if (_arvore.valor) {
      if (_valor < _arvore.valor) {
        this.adicionaNovoValorArvore(_arvore.esquerda, _valor);
      } else {
        this.adicionaNovoValorArvore(_arvore.direita, _valor);
      }
    } else {
      _arvore.esquerda = {};
      _arvore.direita = {};
      _arvore.valor = _valor;
      console.log(_arvore);
      return _arvore;
    }
  };

  printArvocePreenchida() {
    console.log(_arvore);
  }
}


let _arvore = new arvore();
let controle_valores_arvore;
controle_valores_arvore = _arvore.adicionaNovoValorArvore({}, 10);
controle_valores_arvore = _arvore.adicionaNovoValorArvore(controle_valores_arvore, 12);
controle_valores_arvore = _arvore.adicionaNovoValorArvore(controle_valores_arvore, 11);
// controle_valores_arvore = _arvore.adicionaNovoValorArvore(controle_valores_arvore, 9);
// controle_valores_arvore = _arvore.adicionaNovoValorArvore(controle_valores_arvore, 8);