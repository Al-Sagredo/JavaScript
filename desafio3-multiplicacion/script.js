var numero;
//funcion que pide el numero y lo valida
let validar = () => {
  numero = parseInt(prompt("Ingresa un numero entre 1 y 20"));
  if (numero < 1 || numero > 20) {
    return false;
  }
  return true;
}

//llama a la funcion anterior y ejecuta los procesos en caso de validacion correcta
if (validar()) {
  //tabla de multiplicar
  for (let i = 1; i <= numero; i++) {
    console.log(i + " X " + numero + " = " + i * numero);
  }
  //factorial
  for (let i = 1; i <= numero; i++) {
    let res = 1;

    for (let j = 1; j <= i; j++) {
      res *= j;
    }

    console.log("Factorial de " + i + " es: " + res);
  }
//validacion incorrecta
} else alert("numero fuera del rango")
