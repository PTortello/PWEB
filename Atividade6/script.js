const calcMedia = () => {
  const nome = prompt("Digite o nome do aluno:");
  const nota1 = parseFloat(prompt("Digite a primeira nota"));
  const nota2 = parseFloat(prompt("Digite a segunda nota"));
  const nota3 = parseFloat(prompt("Digite a terceira nota"));
  const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

  alert(`A média do aluno ${nome} é ${media}`)
}

const calcOperacoes = () => {
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  
  alert(`
    Soma: ${num1 + num2}\n
    Subtração: ${num1 - num2}\n
    Produto: ${num1 * num2}\n
    Divisão: ${num1 / num2}\n
    Resto: ${num1 % num2}
  `)
}