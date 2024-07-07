const prompt = require("prompt-sync")();

while (true) {

function validaEntrada(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return false;
  }
  return true;
}

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
  return (a * b) / 100;
}

function pergunta() {
  console.log("[+] [-] [/] [*] [%]");

  let operacao = prompt("Entre as opções acima, escolha uma operação: ");
  let num1 = prompt("Escolha o primeiro número: ");
  let num2 = prompt("Escolha o segundo número: ");

  let a = parseFloat(num1);
  let b = parseFloat(num2);

  if (!validaEntrada(a, b)) {
    console.log("Por favor, insira apenas números");
    return;
  }

  let resultado;

  switch (operacao) {
    case "+":
      resultado = adicao(a, b);
      break;
    case "-":
      resultado = subtracao(a, b);
      break;
    case "/":
      resultado = divisao(a, b);
      break;
    case "*":
      resultado = multiplicacao(a, b);
      break;
    case "%":
      resultado = porcentagem(a, b);
      break;
    default:
      resultado = "Operação inválida";
  }

  console.log(`Resultado: ${resultado}`);
}

  pergunta();
  let continuar = prompt("Deseja realizar outra operação? (s/n): ").toLowerCase();
  if (continuar !== 's') {
    break;
  }
}
