class Venda {
    constructor(id, qtd, preco) {
        this.id = id;
        this.qtd = qtd;
        this.preco = preco;
    }

    setId(id) {
        this.id = id;
    }

    setQtd(qtd) {
        this.qtd = qtd;
    }

    setPreco(preco) {
        this.preco = preco;
    }

    getId() {
        return this.id;
    }

    getQtd() {
        return this.qtd;
    }

    getPreco() {
        return this.preco;
    }

    getValorTotal() {
        return this.preco * this.qtd;
    }
}

const venda1 = new Venda(1, 3, 50.0);
const venda2 = new Venda(2, 5, 70.0);
console.log(venda1.getValorTotal());
console.log(venda2.getValorTotal());
