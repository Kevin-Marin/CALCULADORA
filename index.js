const prompt = require("prompt-sync")();

function adicao(a, b) {
  return a + b;
}
function subtracao(a, b) {
  return a - b;
}
function divisao(a, b) {
  if (b === 0) {
    return "Divisão por zero não é válida";
  }
  return a / b;
}
function multiplicacao(a, b) {
  return a * b;
}
function porcentagem(a, b) {
    return (b / a) * 100;
}
function pergunta() {
  console.log("1: Adição");
  console.log("2: Subtração");
  console.log("3: Divisão");
  console.log("4: Multiplicação");
  console.log("5: Porcentagem");

  let operacao = prompt("Entre as opções acima escolha uma operação: ");

  let num1 = prompt("Escolha o primeiro número: ");
  let num2 = prompt("Escolha o segundo número: ");

  let a = parseFloat(num1);
  let b = parseFloat(num2);

  let resultado;

  switch (operacao) {
    case "1":
      resultado = adicao(a, b);
      break;
    case "2":
      resultado = subtracao(a, b);
      break;
    case "3":
      resultado = divisao(a, b);
      break;
    case "4":
      resultado = multiplicacao(a, b);
      break;
      case "5":
      resultado = porcentagem(a, b);
      break;
    default:
      resultado = "Operação inválida";
  }

  console.log(`Resultado: ${resultado}`);
}
pergunta();
