const jogo = () => {
  if (jogador === bot) { return "Empate!" };
  let resultado = (jogador === bot + 1 || jogador === bot - 2) ? "Vitória!" : "Derrota!";
    return resultado;
};

const jogador = parseInt(prompt(
  "Pedra, Papel ou Tesoura?\n" +
  "1 - Pedra\n" +
  "2 - Papel\n" +
  "3 - Tesoura\n"
));

var bot = Math.random();

if (bot < 0.33) {
  bot = 1;
} else if (bot < 0.66) {
  bot = 2;
} else {
  bot = 3;
}

alert(jogo());
