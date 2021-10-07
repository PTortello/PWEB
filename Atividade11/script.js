// Exercício 1. Função construtora
function Retangulo(x, y) {
  this.x = x;
  this.y = y;
  this.area = x * y;
}

var x = parseInt(prompt(`Informe a base:`));
var y = parseInt(prompt(`Informe a altura:`));

var ret = new Retangulo(x, y);
alert(`Área: ${ret.area}`);


/////////////////////////////////////////////////


// Exercício 2. Herança
function Conta() {
  var nome;
  var banco;
  var conta;
  var saldo;

  this.getNome = function () {
    return nome;
  }
  this.setNome = function(value) {
    nome = value;
  }
  this.getBanco = function () {
    return banco;
  }
  this.setBanco = function(value) {
    banco = value;
  }
  this.getConta = function () {
    return conta;
  }
  this.setConta = function(value) {
    conta = value;
  }
  this.getSaldo = function () {
    return saldo;
  }
  this.setSaldo = function(value) {
    saldo = value;
  }
}

function Corrente() {
  var saldoEspecial;

  this.getSaldoEspecial = function () {
    return saldoEspecial;
  }
  this.setSaldoEspecial = function(value) {
    saldoEspecial = value;
  }
}

function Poupanca() {
  var juros;
  var dataVenc;

  this.getJuros = function () {
    return juros;
  }
  this.setJuros = function(value) {
    juros = value;
  }
  this.getDataVenc = function () {
    return dataVenc;
  }
  this.setDataVenc = function(value) {
    dataVenc = value;
  }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var correntista = new Corrente();
correntista.setNome('Pedro');
correntista.setBanco('Itau');
correntista.setConta(12345);
correntista.setSaldo(10000);
correntista.setSaldoEspecial(1000);

var poupador = new Poupanca();
poupador.setNome('João');
poupador.setBanco('Bradesco');
poupador.setConta(54321);
poupador.setSaldo(99999);
poupador.setJuros(0.01);
poupador.setDataVenc(20);

alert(
  "CORRENTISTA\n" +
  `Nome: ${correntista.getNome()}\n` +
  `Banco: ${correntista.getBanco()}\n` +
  `Conta: ${correntista.getConta()}\n` +
  `Saldo: ${correntista.getSaldo()}\n` +
  `Saldo Especial: ${correntista.getSaldoEspecial()}\n\n` +
  "POUPADOR\n" +
  `Nome: ${poupador.getNome()}\n` +
  `Banco: ${poupador.getBanco()}\n` +
  `Conta: ${poupador.getConta()}\n` +
  `Saldo: ${poupador.getSaldo()}\n` +
  `Juros: ${poupador.getJuros()}\n` +
  `Data Vencimento: ${poupador.getDataVenc()}`
);
