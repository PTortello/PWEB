const NUM_PESSOAS = 45;

var idades = 0;
var velha = 0;
var nova = 200;
var pessimo = 0;
var bom_otimo = 0;
var mulheres = 0;
var homens = 0;

for (let i=0; i<NUM_PESSOAS; i++) {
  let idade = parseInt(prompt(`Informe a idade da pessoa ${i+1}:`));
  velha = (idade > velha) ? idade : velha;
  nova = (idade < nova) ? idade : nova;
  idades += idade;
  let opiniao = parseInt(prompt(`
    Informe a opnião da pessoa ${i+1}:\n` +
    "4 - ótimo\n" +
    "3 - bom\n" +
    "2 - regular\n" +
    "1 - péssimo"
  ));
  pessimo += (opiniao === 1) ? 1 : 0;
  bom_otimo += (opiniao === 3 || opiniao === 4) ? 1 : 0;
  let sexo = parseInt(prompt(`
    Informe o sexo da pessoa ${i+1}:\n` +
    "1 - mulher\n" +
    "2 - homem"
  ));
  mulheres += (sexo === 1) ? 1 : 0;
  homens += (sexo === 2) ? 1 : 0;
}

idades /= NUM_PESSOAS;
bom_otimo /= NUM_PESSOAS / 100;

alert(
  `Média de idade: ${idades}\n` +
  `Idade da pessoa mais velha: ${velha}\n` +
  `Idade da pessoa mais nova: ${nova}\n` +
  `Pessoas que responderam péssimo: ${pessimo}\n` +
  `Porcentagem ótimo e bom: ${bom_otimo}\n` +
  `Número de mulheres: ${mulheres}\n` +
  `Número de homens: ${homens}\n`
);
