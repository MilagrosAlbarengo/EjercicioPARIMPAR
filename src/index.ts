let numeroingresado = Number(prompt("Ingrese un numero"));

while (numeroingresado <= 0) {
  let numeroingresado = Number(prompt("Ingrese un numero positivo"));
}

if (numeroingresado % 2 == 0) {
  console.log(" El numero ingresado es par");
} else {
  console.log("El numero ingresado es impar");
}
