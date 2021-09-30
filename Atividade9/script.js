var maior = (n1, n2, n3) => {
  return Math.max(n1, n2, n3);
}

var crescente = (n1, n2, n3) => {
  return [n1, n2, n3].sort(function (a, b) { return a - b });
}

console.log(maior(5, 3, 4));
console.log(crescente(5, 3, 4));