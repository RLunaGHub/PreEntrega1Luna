//Pre Entrega 1 - Ramiro Luna
//Calculadora

function calculadora() {
  const primerNumero = parseInt(prompt("Ingrese el primer número"));
  const segundoNumero = parseInt(prompt("Ingrese el segundo número"));
  const operacion = prompt("Ingrese la operación a realizar");
  switch (operacion) {
    case "suma":
      console.log(primerNumero + segundoNumero);
      break;
    case "resta":
      console.log(primerNumero - segundoNumero);
      break;
    case "dividir":
      console.log(primerNumero / segundoNumero);
      break;
    case "multiplicar":
      console.log(primerNumero * segundoNumero);
      break;
    default:
      console.log(
        "Escriba una operación válida: suma, resta, dividir o multiplicar"
      );
      break;
  }
}

let entrada = prompt("¿Desea realizar una operacion matemática?");

while (entrada != "NO") {
  calculadora();

  entrada = prompt("Si no desea realizar otra operacion presione: NO");
}
